import { useState, useEffect } from "react";

const MESSAGES = [
  "Analysiere deine Antworten …",
  "Vergleiche mit Wahlprogrammen …",
  "Berechne Übereinstimmungen …",
  "Erstelle dein persönliches Ergebnis …",
];

export default function LoadingScreen({ progress }) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setDotCount((d) => (d + 1) % 4), 500);
    return () => clearInterval(iv);
  }, []);

  const msgIdx = Math.min(Math.floor(progress / 25), 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        animation: "fadeIn 0.5s ease",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        {/* Spinner */}
        <div
          style={{
            width: 72,
            height: 72,
            margin: "0 auto 36px",
            borderRadius: "50%",
            border: "4px solid var(--border)",
            borderTopColor: "var(--accent)",
            animation: "spin 0.9s linear infinite",
          }}
        />

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 28,
            color: "var(--text)",
            marginBottom: 12,
          }}
        >
          KI-Analyse läuft{".".repeat(dotCount)}
        </h2>

        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 16,
            color: "var(--text-mid)",
            marginBottom: 44,
            minHeight: 24,
          }}
        >
          {MESSAGES[msgIdx]}
        </p>

        {/* Progress bar */}
        <div style={{ width: "100%", maxWidth: 380, margin: "0 auto" }}>
          <div
            style={{
              width: "100%",
              height: 8,
              background: "var(--bg-bar)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${Math.min(progress, 100)}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent-alt))",
                borderRadius: 4,
                transition: "width 0.8s ease",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "var(--text-dim)",
              marginTop: 10,
            }}
          >
            {Math.round(Math.min(progress, 100))}% abgeschlossen
          </div>
        </div>
      </div>
    </div>
  );
}
