import { useState, useEffect } from "react";

const PARTY_LOGOS = [
  { name: "CDU", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/CDU_Logo_2023.svg/200px-CDU_Logo_2023.svg.png" },
  { name: "SPD", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/SPD-Logo_2022_%28rot%29.svg/200px-SPD-Logo_2022_%28rot%29.svg.png" },
  { name: "Gr\u00fcne", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/B%C3%BCndnis_90_-_Die_Gr%C3%BCnen_Logo_%28transparent%29.svg/200px-B%C3%BCndnis_90_-_Die_Gr%C3%BCnen_Logo_%28transparent%29.svg.png" },
  { name: "FDP", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Logo_der_Freien_Demokraten.svg/200px-Logo_der_Freien_Demokraten.svg.png" },
  { name: "AfD", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/AfD_Logo_2021.svg/200px-AfD_Logo_2021.svg.png" },
  { name: "Linke", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Die_Linke_logo.svg/200px-Die_Linke_logo.svg.png" },
  { name: "BSW", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/B%C3%BCndnis_Sahra_Wagenknecht_logo_2.svg/200px-B%C3%BCndnis_Sahra_Wagenknecht_logo_2.svg.png" },
  { name: "Freie W\u00e4hler", url: "https://upload.wikimedia.org/wikipedia/de/thumb/7/7e/FreieW%C3%A4hlerBundesvereinigungLogo.svg/200px-FreieW%C3%A4hlerBundesvereinigungLogo.svg.png" },
];

const POLL_DATA = [
  { party: "CDU/CSU", pct: 30, color: "#000" },
  { party: "SPD", pct: 16, color: "#E3000F" },
  { party: "Gr\u00fcne", pct: 14, color: "#1AA037" },
  { party: "AfD", pct: 21, color: "#009EE0" },
  { party: "FDP", pct: 5, color: "#FFED00" },
  { party: "Linke", pct: 3, color: "#BE3075" },
  { party: "BSW", pct: 6, color: "#8B1A4A" },
];

export default function LandingPage({ onStart }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* ─── Navbar ─────────────────────────────────────────── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            background: "var(--gradient-accent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -0.5,
          }}
        >
          WahlAI
        </span>
        <button
          onClick={onStart}
          style={{
            padding: "10px 24px",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            background: "var(--accent)",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--accent-alt)";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "var(--accent)";
            e.target.style.transform = "none";
          }}
        >
          Get Started
        </button>
      </nav>

      {/* ─── Hero Section ───────────────────────────────────── */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px 60px",
          maxWidth: 800,
          margin: "0 auto",
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
            marginBottom: 32,
          }}
        >
          Bundestagswahl 2026
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 50px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 24,
            letterSpacing: -3,
          }}
        >
          KI-gest&uuml;tzte Wahlentscheidungshilfe
        </h1>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--text-mid)",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Beantworte 30 politische Fragen in eigenen Worten. Eine KI vergleicht
          deine Positionen mit den Wahlprogrammen aller deutschen Parteien.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={onStart}
            style={{
              padding: "16px 40px",
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              background: "var(--accent)",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.25s ease",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent-alt)";
              e.target.style.boxShadow = "0 0 50px rgba(6, 182, 212, 0.5)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--accent)";
              e.target.style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.3)";
              e.target.style.transform = "none";
            }}
          >
            Jetzt Starten
          </button>
          <button
            onClick={() => {
              document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "16px 40px",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--text)",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 10,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "var(--accent)";
              e.target.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.color = "var(--text)";
            }}
          >
            Wie es funktioniert
          </button>
        </div>
      </section>

      {/* ─── Party Logos ────────────────────────────────────── */}
      <section
        style={{
          padding: "40px 24px 60px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "var(--text-dim)",
            marginBottom: 28,
          }}
        >
          Vergleich mit allen relevanten Parteien
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            alignItems: "center",
          }}
        >
          {PARTY_LOGOS.map((p) => (
            <div
              key={p.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: 16,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 14,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-dim)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
              }}
              title={p.name}
            >
              <img
                src={p.url}
                alt={p.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: "brightness(1.1)",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<span style="font-size:11px;font-weight:700;color:var(--text-mid)">${p.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Hero Image ─────────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 24px 80px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 640,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 0 40px rgba(6,182,212,0.15)",
          }}
        >
          <img
            src="/wahlai-hero.png"
            alt="WahlAI 2026 - KI-gest\u00fctzte Wahlentscheidungshilfe"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ─── Workflow Section ───────────────────────────────── */}
      <section
        id="workflow"
        style={{
          padding: "80px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          DER WORKFLOW
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
            marginBottom: 60,
          }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            Pr&auml;zision durch semantische Analyse
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "var(--text-mid)",
              paddingTop: 8,
            }}
          >
            Kein einfaches Ja/Nein. Wir verstehen den Kontext deiner politischen
            &Uuml;berzeugungen und vergleichen sie mit echten Wahlprogrammen.
          </p>
        </div>

        {/* Step Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              num: "01",
              icon: "\u270D\uFE0F",
              title: "Fragen beantworten",
              desc: "Erz\u00e4hle uns in deinen eigenen Worten, was dir wichtig ist. Keine starren Antwortm\u00f6glichkeiten \u2014 deine Nuancen z\u00e4hlen.",
            },
            {
              num: "02",
              icon: "\uD83E\uDDE0",
              title: "KI-Analyse",
              desc: "Claude Opus 4.6 vergleicht deine Freitext-Antworten mit tausenden Seiten von Parteiprogrammen in Echtzeit.",
            },
            {
              num: "03",
              icon: "\uD83D\uDCCA",
              title: "Dein Ergebnis",
              desc: "Erhalte eine detaillierte Aufschl\u00fcsselung deiner \u00dcbereinstimmungen inklusive Begr\u00fcndungen der KI.",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                background: "var(--gradient-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-dim)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--accent-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: "var(--border)",
                    fontFamily: "'Syne', sans-serif",
                    lineHeight: 1,
                    marginLeft: "auto",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--text-mid)",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Poll Statistics Section ────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Poll Chart */}
          <div
            style={{
              background: "var(--gradient-card)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "32px 28px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: 20,
              }}
            >
              Aktuelle Sonntagsfrage
            </div>
            {POLL_DATA.map((p) => (
              <div key={p.party} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 5,
                  }}
                >
                  <span style={{ color: "var(--text)" }}>{p.party}</span>
                  <span style={{ color: "var(--text-mid)" }}>{p.pct}%</span>
                </div>
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
                      width: `${(p.pct / 35) * 100}%`,
                      height: "100%",
                      background: p.color === "#000" ? "var(--text-mid)" : p.color,
                      borderRadius: 4,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                marginTop: 16,
                fontStyle: "italic",
              }}
            >
              Quelle: Infratest dimap, Stand Feb. 2026
            </div>
          </div>

          {/* Features text */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              DEEP TECH
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 24,
                letterSpacing: -0.5,
              }}
            >
              Die Zukunft der politischen Bildung.
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "var(--text-mid)",
                marginBottom: 32,
              }}
            >
              Wir nutzen fortschrittliche Natural Language Processing (NLP) Modelle,
              um semantische Br&uuml;cken zwischen W&auml;hlerintention und
              Parteiprogrammatik zu schlagen. Kein Algorithmus war jemals n&auml;her
              an der Realit&auml;t.
            </p>

            {/* Checkmark features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Anonym & Sicher (Serverstandort Deutschland)",
                "V\u00f6llig parteiunabh\u00e4ngig & transparent",
                "Inklusive aller Kleinparteien",
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{"\u2713"}</span>
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "60px 40px",
            background: "var(--gradient-card)",
            border: "1px solid var(--border)",
            borderRadius: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: -0.5,
            }}
          >
            Bereit f&uuml;r deine Analyse?
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-mid)",
              marginBottom: 32,
              maxWidth: 400,
              margin: "0 auto 32px",
            }}
          >
            Starte jetzt den digitalen Dialog und finde heraus, welche Partei
            deine Werte im Jahr 2026 wirklich vertritt.
          </p>
          <button
            onClick={onStart}
            style={{
              padding: "16px 48px",
              fontSize: 16,
              fontWeight: 700,
              color: "var(--accent)",
              background: "transparent",
              border: "2px solid var(--accent)",
              borderRadius: 10,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent)";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 0 30px rgba(6,182,212,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "var(--accent)";
              e.target.style.boxShadow = "none";
            }}
          >
            Kostenlose Analyse starten
          </button>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <footer
        style={{
          padding: "32px 40px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 16,
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WahlAI
          </span>
          <span
            style={{
              fontSize: 12,
              color: "var(--text-dim)",
              marginLeft: 12,
            }}
          >
            &copy; 2026 WahlAI. The Digital Diplomat.
          </span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Service", "Legal Notice", "Contact"].map(
            (link) => (
              <span
                key={link}
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-dim)")}
              >
                {link}
              </span>
            )
          )}
        </div>
      </footer>
    </div>
  );
}
