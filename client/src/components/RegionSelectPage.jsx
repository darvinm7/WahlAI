import { useState, useEffect } from "react";

const REGIONS = [
  { id: "bundesweit", name: "Bundesweit", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/100px-Coat_of_arms_of_Germany.svg.png", desc: "Alle 30 Fragen zu bundesweiten Themen" },
  { id: "bw", name: "Baden-W\u00fcrttemberg", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lesser_coat_of_arms_of_Baden-W%C3%BCrttemberg.svg/100px-Lesser_coat_of_arms_of_Baden-W%C3%BCrttemberg.svg.png", desc: "Automobilindustrie, Bildung, Innovation" },
  { id: "by", name: "Bayern", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bayern_Wappen.svg/100px-Bayern_Wappen.svg.png", desc: "Wirtschaft, Tradition, Technologie" },
  { id: "be", name: "Berlin", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/DEU_Berlin_COA.svg/100px-DEU_Berlin_COA.svg.png", desc: "Mieten, Mobilit\u00e4t, Verwaltung" },
  { id: "bb", name: "Brandenburg", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DEU_Brandenburg_COA.svg/100px-DEU_Brandenburg_COA.svg.png", desc: "Strukturwandel, Tesla, l\u00e4ndlicher Raum" },
  { id: "hb", name: "Bremen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bremen_Wappen%28Mittel%29.svg/100px-Bremen_Wappen%28Mittel%29.svg.png", desc: "Hafen, Bildung, Stadtentwicklung" },
  { id: "hh", name: "Hamburg", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DEU_Hamburg_COA.svg/100px-DEU_Hamburg_COA.svg.png", desc: "Hafen, Wohnen, Verkehr" },
  { id: "he", name: "Hessen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Coat_of_arms_of_Hesse.svg/100px-Coat_of_arms_of_Hesse.svg.png", desc: "Finanzplatz, Mobilit\u00e4t, Sicherheit" },
  { id: "mv", name: "Mecklenburg-Vorpommern", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_Mecklenburg-Western_Pomerania_%28great%29.svg/100px-Coat_of_arms_of_Mecklenburg-Western_Pomerania_%28great%29.svg.png", desc: "Tourismus, Abwanderung, Energie" },
  { id: "ni", name: "Niedersachsen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Lower_Saxony.svg/100px-Coat_of_arms_of_Lower_Saxony.svg.png", desc: "Landwirtschaft, VW, K\u00fcste" },
  { id: "nw", name: "Nordrhein-Westfalen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_North_Rhine-Westphalia.svg/100px-Coat_of_arms_of_North_Rhine-Westphalia.svg.png", desc: "Strukturwandel, Rheinland, Ruhrgebiet" },
  { id: "rp", name: "Rheinland-Pfalz", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Coat_of_arms_of_Rhineland-Palatinate.svg/100px-Coat_of_arms_of_Rhineland-Palatinate.svg.png", desc: "Weinbau, US-Milit\u00e4r, Ahrtal" },
  { id: "sl", name: "Saarland", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wappen_des_Saarlands.svg/100px-Wappen_des_Saarlands.svg.png", desc: "Stahlindustrie, Grenzregion, Strukturwandel" },
  { id: "sn", name: "Sachsen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coat_of_arms_of_Saxony.svg/100px-Coat_of_arms_of_Saxony.svg.png", desc: "Chipindustrie, Rechtsextremismus, Kohle" },
  { id: "st", name: "Sachsen-Anhalt", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wappen_Sachsen-Anhalt.svg/100px-Wappen_Sachsen-Anhalt.svg.png", desc: "Chemie, Abwanderung, Infrastruktur" },
  { id: "sh", name: "Schleswig-Holstein", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DEU_Schleswig-Holstein_COA.svg/100px-DEU_Schleswig-Holstein_COA.svg.png", desc: "Windenergie, Tourismus, D\u00e4nische Minderheit" },
  { id: "th", name: "Th\u00fcringen", wappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Thuringia.svg/100px-Coat_of_arms_of_Thuringia.svg.png", desc: "Politische Lage, Industrie, l\u00e4ndlicher Raum" },
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
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img
                    src={region.wappen}
                    alt={region.name}
                    style={{
                      width: isBund ? 36 : 30,
                      height: isBund ? 36 : 30,
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
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
