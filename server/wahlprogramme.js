import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CACHE_DIR = join(__dirname, "data", "cache");

// Official Wahlprogramm PDF URLs (Bundestagswahl 2025)
const PARTY_PROGRAMS = [
  {
    name: "CDU/CSU",
    url: "https://www.cdu.de/app/uploads/2025/01/km_btw_2025_wahlprogramm_langfassung_ansicht.pdf",
  },
  {
    name: "SPD",
    url: "https://www.spd.de/fileadmin/Dokumente/Beschluesse/Programm/2025_SPD_Regierungsprogramm.pdf",
  },
  {
    name: "Bündnis 90/Die Grünen",
    url: "https://cms.gruene.de/uploads/assets/20250205_Regierungsprogramm_DIGITAL_DINA5.pdf",
  },
  {
    name: "FDP",
    url: "https://www.fdp.de/sites/default/files/2024-12/fdp-wahlprogramm_2025.pdf",
  },
  {
    name: "AfD",
    url: "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf",
  },
  {
    name: "Die Linke",
    url: "https://www.die-linke.de/fileadmin/user_upload/Wahlprogramm_Langfassung_Linke-BTW25_01.pdf",
  },
  {
    name: "BSW",
    url: "https://bsw-vg.de/wp-content/themes/bsw/assets/downloads/BSW%20Wahlprogramm%202025.pdf",
  },
  {
    name: "Freie Wähler",
    url: "https://www.freiewaehler.eu/template/elemente/566/FREIE%20W%C3%84HLER%20Wahlprogramm%202025.pdf",
  },
  {
    name: "Die PARTEI",
    url: null, // Satirepartei — kein offizielles PDF verfügbar
  },
];

// Max characters per party to include in prompt (~8000 words)
const MAX_CHARS_PER_PARTY = 40000;

/**
 * Ensure cache directory exists
 */
function ensureCacheDir() {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
}

/**
 * Get cache file path for a party
 */
function getCachePath(partyName) {
  const safe = partyName.replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, "_");
  return join(CACHE_DIR, `${safe}.txt`);
}

/**
 * Download a PDF and extract text using pdf-parse
 */
async function downloadAndExtract(party) {
  if (!party.url) {
    return null;
  }

  console.log(`  Lade ${party.name} Wahlprogramm herunter...`);

  try {
    const response = await fetch(party.url, {
      headers: {
        "User-Agent":
          "WahlAI/1.0 (Wahlentscheidungshilfe; Bildungszwecke)",
      },
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    // Dynamic import of pdf-parse
    const pdfParse = (await import("pdf-parse")).default;
    const data = await pdfParse(buffer);

    // Clean up extracted text
    let text = data.text || "";
    // Remove excessive whitespace
    text = text.replace(/\n{3,}/g, "\n\n").trim();

    console.log(
      `  ✓ ${party.name}: ${text.length} Zeichen extrahiert (${data.numpages} Seiten)`
    );
    return text;
  } catch (err) {
    console.error(`  ✗ ${party.name}: Fehler beim Download — ${err.message}`);
    return null;
  }
}

/**
 * Load all Wahlprogramme — download if not cached
 */
export async function loadWahlprogramme() {
  ensureCacheDir();

  console.log("\n📄 Lade Wahlprogramme...");

  const results = {};
  let downloadCount = 0;
  let cacheCount = 0;

  for (const party of PARTY_PROGRAMS) {
    const cachePath = getCachePath(party.name);

    // Check cache first
    if (existsSync(cachePath)) {
      const cached = readFileSync(cachePath, "utf-8");
      if (cached.length > 100) {
        results[party.name] = cached;
        cacheCount++;
        continue;
      }
    }

    // Download and extract
    const text = await downloadAndExtract(party);
    if (text && text.length > 100) {
      writeFileSync(cachePath, text, "utf-8");
      results[party.name] = text;
      downloadCount++;
    }
  }

  console.log(
    `📄 Wahlprogramme geladen: ${cacheCount} aus Cache, ${downloadCount} neu heruntergeladen`
  );
  console.log(
    `   Verfügbar: ${Object.keys(results).join(", ")}\n`
  );

  return results;
}

/**
 * Build Wahlprogramm context string for the analysis prompt
 * Includes truncated text from each party's program
 */
export function buildWahlprogrammContext(programTexts) {
  if (!programTexts || Object.keys(programTexts).length === 0) {
    return "";
  }

  let context =
    "\n\n=== OFFIZIELLE WAHLPROGRAMME DER PARTEIEN (Bundestagswahl 2025) ===\n";
  context +=
    "Die folgenden Texte sind direkte Auszüge aus den offiziellen Wahlprogrammen.\n";
  context +=
    "Nutze diese als primäre Quelle für den Vergleich mit den Nutzerantworten.\n\n";

  for (const [partyName, text] of Object.entries(programTexts)) {
    const truncated =
      text.length > MAX_CHARS_PER_PARTY
        ? text.substring(0, MAX_CHARS_PER_PARTY) +
          "\n[... Wahlprogramm gekürzt ...]"
        : text;

    context += `--- WAHLPROGRAMM: ${partyName} ---\n`;
    context += truncated;
    context += "\n\n";
  }

  context += "=== ENDE DER WAHLPROGRAMME ===\n";
  return context;
}

export { PARTY_PROGRAMS };
