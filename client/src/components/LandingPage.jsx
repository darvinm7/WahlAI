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
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          background: "var(--wom-blue)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
            color: "var(--wom-blue)",
          }}
        >
          W
        </div>
        <span
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          WahlAI
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 13,
            fontWeight: 400,
            marginLeft: 8,
          }}
        >
          Bundestagswahl 2025
        </span>
      </div>

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--wom-blue) 0%, #004A7F 100%)",
          padding: "72px 24px 80px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          Wahl<span style={{ color: "#7CC4FA" }}>AI</span>
        </h1>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 32,
          }}
        >
          KI-gestützte Wahlentscheidungshilfe
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 600,
            margin: "0 auto 12px",
          }}
        >
          Beantworte 30 Fragen zu aktuellen politischen Themen mit deinen
          eigenen Worten. Eine KI analysiert deine Antworten und vergleicht
          sie mit den offiziellen Wahlprogrammen aller relevanten Parteien.
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Anders als der klassische Wahl-O-Mat kannst du hier frei
          formulieren und die Wichtigkeit jedes Themas individuell gewichten.
        </p>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px 24px 60px",
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            width: "100%",
            marginBottom: 48,
          }}
        >
          {[
            {
              icon: "✍️",
              title: "Freie Antworten",
              desc: "Formuliere deine Meinung in eigenen Worten statt vorgefertigter Optionen",
              color: "var(--wom-blue)",
            },
            {
              icon: "⚖️",
              title: "Individuelle Gewichtung",
              desc: "Bestimme selbst, wie wichtig dir jedes Thema ist (1-10)",
              color: "var(--wom-green)",
            },
            {
              icon: "📄",
              title: "Echte Wahlprogramme",
              desc: "KI-Analyse basiert auf den offiziellen Wahlprogrammen der Parteien",
              color: "var(--wom-red)",
            },
            {
              icon: "🤖",
              title: "KI-Analyse",
              desc: "Claude 4.5 Haiku analysiert deine Positionen tiefgehend und differenziert",
              color: "var(--wom-orange)",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "24px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                borderTop: `3px solid ${item.color}`,
                boxShadow: "var(--shadow-sm)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: "var(--text)",
                  marginBottom: 6,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Party Logos Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          {[
            { name: "CDU/CSU", color: "#000" },
            { name: "SPD", color: "#E3000F" },
            { name: "Grüne", color: "#1AA037" },
            { name: "FDP", color: "#FFED00", textColor: "#333" },
            { name: "AfD", color: "#009EE0" },
            { name: "Linke", color: "#BE3075" },
            { name: "BSW", color: "#8B1A4A" },
            { name: "FW", color: "#F5820D" },
            { name: "PARTEI", color: "#B5152B" },
          ].map((p) => (
            <span
              key={p.name}
              style={{
                background: p.color,
                color: p.textColor || "#fff",
                padding: "5px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.3,
              }}
            >
              {p.name}
            </span>
          ))}
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          style={{
            fontWeight: 700,
            fontSize: 18,
            padding: "18px 64px",
            background: "var(--wom-blue)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            letterSpacing: 0.3,
            transition: "all 0.25s ease",
            boxShadow: "var(--shadow-md)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#004A7F";
            e.target.style.boxShadow = "var(--shadow-lg)";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "var(--wom-blue)";
            e.target.style.boxShadow = "var(--shadow-md)";
            e.target.style.transform = "none";
          }}
        >
          Jetzt starten
        </button>

        {/* Disclaimer */}
        <p
          style={{
            marginTop: 32,
            fontSize: 12,
            color: "var(--text-dim)",
            textAlign: "center",
            maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          Die WahlAI ist keine offizielle Wahlempfehlung. Sie dient als
          Orientierungshilfe und ersetzt nicht die eigene Auseinandersetzung
          mit den Wahlprogrammen.
        </p>
      </div>
    </div>
  );
}
