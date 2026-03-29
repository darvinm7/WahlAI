import { useState, useEffect } from "react";

const REGIONS = [
  { id: "bundesweit", name: "Bundesweit", emoji: "\uD83C\uDDE9\uD83C\uDDEA", desc: "Alle 30 Fragen zu bundesweiten Themen" },
  { id: "bw", name: "Baden-W\u00fcrttemberg", emoji: "\uD83C\uDFF0", desc: "Automobilindustrie, Bildung, Innovation" },
  { id: "by", name: "Bayern", emoji: "\u26F0\uFE0F", desc: "Wirtschaft, Tradition, Technologie" },
  { id: "be", name: "Berlin", emoji: "\uD83C\uDFDB\uFE0F", desc: "Mieten, Mobilit\u00e4t, Verwaltung" },
  { id: "bb", name: "Brandenburg", emoji: "\uD83C\uDF33", desc: "Strukturwandel, Tesla, l\u00e4ndlicher Raum" },
  { id: "hb", name: "Bremen", emoji: "\u2693", desc: "Hafen, Bildung, Stadtentwicklung" },
  { id: "hh", name: "Hamburg", emoji: "\u2693", desc: "Hafen, Wohnen, Verkehr" },
  { id: "he", name: "Hessen", emoji: "\uD83C\uDFE6", desc: "Finanzplatz, Mobilit\u00e4t, Sicherheit" },
  { id: "mv", name: "Mecklenburg-Vorpommern", emoji: "\uD83C\uDF0A", desc: "Tourismus, Abwanderung, Energie" },
  { id: "ni", name: "Niedersachsen", emoji: "\uD83D\uDE9C", desc: "Landwirtschaft, VW, K\u00fcste" },
  { id: "nw", name: "Nordrhein-Westfalen", emoji: "\u2692\uFE0F", desc: "Strukturwandel, Rheinland, Ruhrgebiet" },
  { id: "rp", name: "Rheinland-Pfalz", emoji: "\uD83C\uDF47", desc: "Weinbau, US-Milit\u00e4r, Ahrtal" },
  { id: "sl", name: "Saarland", emoji: "\uD83C\uDFED", desc: "Stahlindustrie, Grenzregion, Strukturwandel" },
  { id: "sn", name: "Sachsen", emoji: "\uD83D\uDD27", desc: "Chipindustrie, Rechtsextremismus, Kohle" },
  { id: "st", name: "Sachsen-Anhalt", emoji: "\u26EA", desc: "Chemie, Abwanderung, Infrastruktur" },
  { id: "sh", name: "Schleswig-Holstein", emoji: "\uD83C\uDF0A", desc: "Windenergie, Tourismus, D\u00e4nische Minderheit" },
  { id: "th", name: "Th\u00fcringen", emoji: "\uD83C\uDFF0", desc: "Politische Lage, Industrie, l\u00e4ndlicher Raum" },
];

export default function RegionSelectPage({ onSelect }) {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 18,
            background: "var(--gradient-accent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WahlAI
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "48px 24px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid var(--accent-dim)",
            borderRadius: 20,
            marginBottom: 24,
          }}
        >
          Wähle deine Region
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 12,
            letterSpacing: -1,
          }}
        >
          Für welche Wahl möchtest du analysiert werden?
        </h1>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--text-mid)",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Wähle „Bundesweit" für die Bundestagswahl oder dein Bundesland
          für eine regionale Analyse mit ortsspezifischen Themen.
        </p>

        {/* Region Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {REGIONS.map((region) => {
            const isHovered = hoveredId === region.id;
            const isBund = region.id === "bundesweit";
            return (
              <button
                key={region.id}
                onClick={() => onSelect(region.id)}
                onMouseEnter={() => setHoveredId(region.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: isBund ? "20px 16px" : "16px",
                  background: isHovered
                    ? "var(--accent-bg)"
                    : "var(--bg-card)",
                  border: `1px solid ${
                    isHovered ? "var(--accent-dim)" : "var(--border)"
                  }`,
                  borderRadius: 14,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  transform: isHovered ? "translateY(-2px)" : "none",
                  boxShadow: isHovered ? "var(--shadow-md)" : "none",
                  gridColumn: isBund ? "1 / -1" : "auto",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: isBund ? 22 : 18 }}>{region.emoji}</span>
                  <span
                    style={{
                      fontSize: isBund ? 16 : 14,
                      fontWeight: 700,
                      color: isHovered ? "var(--accent)" : "var(--text)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {region.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-dim)",
                    lineHeight: 1.5,
                  }}
                >
                  {region.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
