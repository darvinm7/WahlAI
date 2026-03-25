import { useState, useEffect } from "react";

const MESSAGES = [
  "Analysiere deine Antworten ...",
  "Vergleiche mit Wahlprogrammen ...",
  "Berechne Übereinstimmungen ...",
  "Erstelle dein persönliches Ergebnis ...",
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
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          background: "var(--wom-blue)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          color: "#fff",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 13,
            color: "var(--wom-blue)",
          }}
        >
          W
        </div>
        <span style={{ fontWeight: 700, fontSize: 16 }}>WahlAI</span>
      </div>

      {/* Loading Content */}
      <div
        style={{
          flex: 1,
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
              width: 64,
              height: 64,
              margin: "0 auto 32px",
              borderRadius: "50%",
              border: "4px solid var(--border)",
              borderTopColor: "var(--wom-blue)",
              animation: "spin 0.9s linear infinite",
            }}
          />

          <h2
            style={{
              fontWeight: 700,
              fontSize: 24,
              color: "var(--text)",
              marginBottom: 10,
            }}
          >
            KI-Analyse läuft{".".repeat(dotCount)}
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "var(--text-mid)",
              marginBottom: 40,
              minHeight: 24,
            }}
          >
            {MESSAGES[msgIdx]}
          </p>

          {/* Steps */}
          <div style={{ marginBottom: 32, textAlign: "left", maxWidth: 320, margin: "0 auto 32px" }}>
            {MESSAGES.map((msg, i) => {
              const isDone = i < msgIdx;
              const isActive = i === msgIdx;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    opacity: isDone ? 0.5 : isActive ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: isDone ? "#fff" : isActive ? "#fff" : "var(--text-dim)",
                      background: isDone
                        ? "var(--success)"
                        : isActive
                        ? "var(--wom-blue)"
                        : "var(--bg-bar)",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    {isDone ? "✓" : i + 1}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "var(--text)" : "var(--text-mid)",
                    }}
                  >
                    {msg}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div style={{ width: "100%", maxWidth: 360, margin: "0 auto" }}>
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
                  background: "var(--wom-blue)",
                  borderRadius: 4,
                  transition: "width 0.8s ease",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--text-dim)",
                marginTop: 8,
              }}
            >
              {Math.round(Math.min(progress, 100))}% abgeschlossen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
