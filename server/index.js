import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from project root
dotenv.config({ path: join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───────────────────────────────────────────
app.use(express.json({ limit: "100kb" }));

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.ALLOWED_ORIGIN || true
        : "http://localhost:5173",
    methods: ["POST"],
  })
);

// Rate limiting: max 10 analyses per IP per hour
const analysisLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: {
    error: "Zu viele Anfragen. Bitte versuche es in einer Stunde erneut.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── API Key check ───────────────────────────────────────
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === "dein-api-key-hier-eintragen") {
  console.error("\n╔══════════════════════════════════════════════════════╗");
  console.error("║  FEHLER: Kein gültiger ANTHROPIC_API_KEY gefunden!  ║");
  console.error("║                                                      ║");
  console.error("║  1. Kopiere .env.example nach .env                   ║");
  console.error("║  2. Trage deinen API-Key in .env ein                 ║");
  console.error("║  3. Starte den Server neu                            ║");
  console.error("╚══════════════════════════════════════════════════════╝\n");
  process.exit(1);
}

// ─── System Prompt ───────────────────────────────────────
const SYSTEM_PROMPT = `Du bist ein hochpräziser politischer Analyst für Deutschland. Du kennst alle aktuellen Wahlprogramme der deutschen Parteien für die Bundestagswahl 2025 sehr genau und kannst die Positionen differenziert einordnen.

Deine Aufgabe: Analysiere die Antworten eines Nutzers auf 30 politische Fragen und vergleiche sie gründlich mit den tatsächlichen Positionen der folgenden Parteien: CDU/CSU, SPD, Bündnis 90/Die Grünen, FDP, AfD, Die Linke, BSW, Volt, Freie Wähler.

Für JEDE Frage-Antwort-Kombination:
1. Identifiziere die Kernposition des Nutzers — was genau fordert er/sie?
2. Vergleiche diese Position mit den echten, konkreten Wahlprogramm-Positionen jeder Partei
3. Vergib einen Übereinstimmungsscore von 0 bis 100 für jede Partei (0 = komplett gegenteilige Position, 50 = neutral/unklar, 100 = volle Übereinstimmung)

Berücksichtige die Gewichtung (1-10) die der Nutzer für jede Frage angegeben hat. Eine Frage mit Wichtigkeit 10 soll 10x stärker in die Gesamtwertung einfließen als eine Frage mit Wichtigkeit 1.

WICHTIG: Antworte NUR mit einem validen JSON-Objekt im folgenden Format. KEIN Markdown, KEINE Backticks, KEIN Text davor oder danach — nur reines JSON:
{
  "partyScores": {
    "CDU/CSU": { "score": 0, "reasoning": "" },
    "SPD": { "score": 0, "reasoning": "" },
    "Bündnis 90/Die Grünen": { "score": 0, "reasoning": "" },
    "FDP": { "score": 0, "reasoning": "" },
    "AfD": { "score": 0, "reasoning": "" },
    "Die Linke": { "score": 0, "reasoning": "" },
    "BSW": { "score": 0, "reasoning": "" },
    "Volt": { "score": 0, "reasoning": "" },
    "Freie Wähler": { "score": 0, "reasoning": "" }
  },
  "topicBreakdown": [
    {
      "topic": "Themenname",
      "questionId": 1,
      "scores": { "CDU/CSU": 0, "SPD": 0, "Bündnis 90/Die Grünen": 0, "FDP": 0, "AfD": 0, "Die Linke": 0, "BSW": 0, "Volt": 0, "Freie Wähler": 0 }
    }
  ]
}

"score" in "partyScores" = gewichteter Gesamtscore (0-100).
"reasoning" = kurze deutsche Begründung (2-3 Sätze), warum der Nutzer zu dieser Partei passt oder nicht.
"topicBreakdown" = Übereinstimmungsscore (0-100) pro Partei für JEDE einzelne der 30 Fragen.`;

// ─── Analysis endpoint ───────────────────────────────────
app.post("/api/analyze", analysisLimiter, async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || typeof answers !== "string" || answers.length < 100) {
      return res.status(400).json({
        error: "Ungültige Anfrage. Bitte beantworte alle Fragen.",
      });
    }

    if (answers.length > 50000) {
      return res.status(400).json({
        error: "Die Antworten sind zu lang. Bitte kürze deine Texte.",
      });
    }

    console.log(
      `[${new Date().toISOString()}] Analyse gestartet (${answers.length} Zeichen)`
    );

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: answers }],
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("Anthropic API error:", response.status, errData);

      if (response.status === 401) {
        return res.status(500).json({
          error:
            "API-Authentifizierung fehlgeschlagen. Bitte prüfe den API-Key.",
        });
      }
      if (response.status === 429) {
        return res.status(429).json({
          error:
            "API-Limit erreicht. Bitte versuche es in einigen Minuten erneut.",
        });
      }
      return res.status(502).json({
        error: `KI-Analyse fehlgeschlagen (Status ${response.status}).`,
      });
    }

    const data = await response.json();
    const text = data.content
      .map((block) => (block.type === "text" ? block.text : ""))
      .filter(Boolean)
      .join("\n");

    // Parse JSON — handle possible markdown wrapping
    const clean = text.replace(/```json|```/g, "").trim();
    let parsed;
    try {
      parsed = JSON.parse(clean);
    } catch {
      const jsonMatch = clean.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("KI-Antwort konnte nicht als JSON verarbeitet werden.");
      }
    }

    // Validate structure
    if (!parsed.partyScores) {
      throw new Error("Ungültiges Analyseergebnis — partyScores fehlt.");
    }

    console.log(
      `[${new Date().toISOString()}] Analyse erfolgreich abgeschlossen`
    );
    res.json(parsed);
  } catch (err) {
    console.error("Analysis error:", err.message);
    res.status(500).json({
      error: err.message || "Interner Serverfehler bei der Analyse.",
    });
  }
});

// ─── Health check ────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Serve frontend in production ────────────────────────
if (process.env.NODE_ENV === "production") {
  const clientDist = join(__dirname, "..", "client", "dist");
  app.use(express.static(clientDist));
  app.get("*", (req, res) => {
    res.sendFile(join(clientDist, "index.html"));
  });
}

// ─── Start ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🗳️  WahlAI Server läuft auf http://localhost:${PORT}`);
  console.log(`   Umgebung: ${process.env.NODE_ENV || "development"}`);
  console.log(`   API-Key: ${ANTHROPIC_API_KEY.slice(0, 10)}...`);
  console.log("");
});
