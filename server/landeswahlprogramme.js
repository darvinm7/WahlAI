import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CACHE_DIR = join(__dirname, "data", "cache", "laender");

// Max characters per party per Bundesland (smaller than federal since supplementary)
const MAX_CHARS_PER_PARTY = 30000;

// Landeswahlprogramme URLs — organized by Bundesland
// Note: Not all parties have state-level programs available online.
// For missing programs, the AI will use its training knowledge about
// the party's general positions adapted to the state context.
const LANDES_PROGRAMME = {
  bw: {
    name: "Baden-W\u00fcrttemberg",
    lastElection: "2021",
    programs: [],
  },
  by: {
    name: "Bayern",
    lastElection: "2023",
    programs: [],
  },
  be: {
    name: "Berlin",
    lastElection: "2023",
    programs: [],
  },
  bb: {
    name: "Brandenburg",
    lastElection: "2024",
    programs: [],
  },
  hb: {
    name: "Bremen",
    lastElection: "2023",
    programs: [],
  },
  hh: {
    name: "Hamburg",
    lastElection: "2025",
    programs: [],
  },
  he: {
    name: "Hessen",
    lastElection: "2023",
    programs: [],
  },
  mv: {
    name: "Mecklenburg-Vorpommern",
    lastElection: "2021",
    programs: [],
  },
  ni: {
    name: "Niedersachsen",
    lastElection: "2022",
    programs: [],
  },
  nw: {
    name: "Nordrhein-Westfalen",
    lastElection: "2022",
    programs: [],
  },
  rp: {
    name: "Rheinland-Pfalz",
    lastElection: "2021",
    programs: [],
  },
  sl: {
    name: "Saarland",
    lastElection: "2022",
    programs: [],
  },
  sn: {
    name: "Sachsen",
    lastElection: "2024",
    programs: [],
  },
  st: {
    name: "Sachsen-Anhalt",
    lastElection: "2021",
    programs: [],
  },
  sh: {
    name: "Schleswig-Holstein",
    lastElection: "2022",
    programs: [],
  },
  th: {
    name: "Th\u00fcringen",
    lastElection: "2024",
    programs: [],
  },
};

function ensureCacheDir() {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function getCachePath(regionId, partyName) {
  const safe = partyName.replace(/[^a-zA-Z0-9\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc\u00df]/g, "_");
  return join(CACHE_DIR, `${regionId}_${safe}.txt`);
}

async function downloadAndExtract(party, regionName) {
  if (!party.url) return null;

  console.log(`  Lade ${party.name} Landesprogramm (${regionName})...`);

  try {
    const response = await fetch(party.url, {
      headers: {
        "User-Agent": "WahlAI/1.0 (Wahlentscheidungshilfe; Bildungszwecke)",
      },
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const buffer = Buffer.from(await response.arrayBuffer());
    const pdfParse = (await import("pdf-parse")).default;
    const data = await pdfParse(buffer);

    let text = data.text || "";
    text = text.replace(/\n{3,}/g, "\n\n").trim();

    console.log(
      `  \u2713 ${party.name} (${regionName}): ${text.length} Zeichen (${data.numpages} Seiten)`
    );
    return text;
  } catch (err) {
    console.error(
      `  \u2717 ${party.name} (${regionName}): ${err.message}`
    );
    return null;
  }
}

/**
 * Load Landeswahlprogramme for a specific Bundesland
 */
export async function loadLandeswahlprogramme(regionId) {
  const region = LANDES_PROGRAMME[regionId];
  if (!region) return {};

  ensureCacheDir();

  console.log(`\n\uD83C\uDFDB\uFE0F  Lade Landeswahlprogramme f\u00fcr ${region.name}...`);

  const results = {};
  let downloadCount = 0;
  let cacheCount = 0;

  for (const party of region.programs) {
    const cachePath = getCachePath(regionId, party.name);

    if (existsSync(cachePath)) {
      const cached = readFileSync(cachePath, "utf-8");
      if (cached.length > 100) {
        results[party.name] = cached;
        cacheCount++;
        continue;
      }
    }

    const text = await downloadAndExtract(party, region.name);
    if (text && text.length > 100) {
      writeFileSync(cachePath, text, "utf-8");
      results[party.name] = text;
      downloadCount++;
    }
  }

  if (region.programs.length > 0) {
    console.log(
      `\uD83C\uDFDB\uFE0F  Landesprogramme ${region.name}: ${cacheCount} Cache, ${downloadCount} neu`
    );
  } else {
    console.log(
      `\uD83C\uDFDB\uFE0F  ${region.name}: Keine Landesprogramm-URLs konfiguriert \u2014 KI nutzt Trainingswissen`
    );
  }

  return results;
}

/**
 * Build context string for Landeswahlprogramme
 */
export function buildLandesContext(regionId, programTexts) {
  const region = LANDES_PROGRAMME[regionId];
  if (!region) return "";

  let context = `\n\n=== LANDESWAHLPROGRAMME: ${region.name} (Letzte Landtagswahl: ${region.lastElection}) ===\n`;

  if (!programTexts || Object.keys(programTexts).length === 0) {
    context += `F\u00fcr ${region.name} sind keine Landtagswahlprogramme als PDF verf\u00fcgbar.\n`;
    context += `Nutze dein Trainingswissen \u00fcber die Positionen der Parteien in ${region.name} f\u00fcr die Analyse der landesspezifischen Fragen.\n`;
    context += `Ber\u00fccksichtige dabei die aktuelle Landesregierung, regionale Besonderheiten und bekannte Positionen der Parteien auf Landesebene.\n`;
  } else {
    context += `Die folgenden Texte sind Ausz\u00fcge aus den Landtagswahlprogrammen f\u00fcr ${region.name}.\n`;
    context += `Nutze diese zus\u00e4tzlich zu den Bundeswahlprogrammen f\u00fcr die Analyse der landesspezifischen Fragen.\n\n`;

    for (const [partyName, text] of Object.entries(programTexts)) {
      const truncated =
        text.length > MAX_CHARS_PER_PARTY
          ? text.substring(0, MAX_CHARS_PER_PARTY) +
            "\n[... Landesprogramm gek\u00fcrzt ...]"
          : text;

      context += `--- LANDESPROGRAMM ${region.name}: ${partyName} ---\n`;
      context += truncated;
      context += "\n\n";
    }
  }

  context += `=== ENDE LANDESWAHLPROGRAMME ${region.name} ===\n`;
  return context;
}

export function getRegionName(regionId) {
  return LANDES_PROGRAMME[regionId]?.name || null;
}

export { LANDES_PROGRAMME };
