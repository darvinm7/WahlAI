import { useState, useEffect } from "react";

export default function LandingPage({ onStart }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 680 }}>
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(56px, 11vw, 96px)",
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            marginBottom: 8,
            background: "linear-gradient(135deg, var(--accent), var(--accent-alt))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WahlAI
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--text-dim)",
            marginBottom: 56,
          }}
        >
          KI-gestützte Wahlentscheidungshilfe
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 19,
            lineHeight: 1.75,
            color: "var(--text-mid)",
            marginBottom: 16,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Beantworte 30 Fragen zu aktuellen politischen Themen mit deinen
          eigenen Worten. Eine KI analysiert deine Antworten und vergleicht
          sie mit den Wahlprogrammen aller relevanten Parteien.
        </p>
        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--text-dim)",
            marginBottom: 56,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Anders als der klassische Wahl-O-Mat kannst du hier frei
          formulieren und die Wichtigkeit jedes Themas individuell gewichten
          — für ein differenzierteres Ergebnis.
        </p>

        {/* Feature Cards */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          {[
            {
              icon: "✍️",
              label: "Freie Antworten",
              desc: "Keine vorgegebenen Optionen",
            },
            {
              icon: "⚖️",
              label: "Gewichtung",
              desc: "Priorisiere deine Themen",
            },
            {
              icon: "🤖",
              label: "KI-Analyse",
              desc: "Tiefgehender Vergleich",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "22px 26px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                width: 180,
                textAlign: "center",
                transition: "border-color 0.2s ease",
              }}
            >
              <div style={{ fontSize: 30, marginBottom: 10 }}>{item.icon}</div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: "var(--text-dim)",
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            padding: "20px 64px",
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 60,
            cursor: "pointer",
            letterSpacing: 0.5,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 8px 36px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
          }}
        >
          Jetzt starten →
        </button>
      </div>
    </div>
  );
}
