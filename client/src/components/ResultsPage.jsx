import { useState, useEffect } from "react";
import PARTIES from "../data/parties.js";
import QUESTIONS from "../data/questions.js";

export default function ResultsPage({ results, importances, onRestart }) {
  const [visible, setVisible] = useState(false);
  const [expandedParty, setExpandedParty] = useState(null);
  const [showTopics, setShowTopics] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  if (!results || !results.partyScores) return null;

  const sorted = PARTIES.map((p) => ({
    ...p,
    score: results.partyScores[p.name]?.score || 0,
    reasoning: results.partyScores[p.name]?.reasoning || "",
  })).sort((a, b) => b.score - a.score);

  const topScore = sorted[0]?.score || 1;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px 80px",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "all 0.8s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 7vw, 56px)",
              fontWeight: 800,
              letterSpacing: -2,
              color: "var(--text)",
              marginBottom: 8,
            }}
          >
            Dein Ergebnis
          </div>
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 16,
              color: "var(--text-mid)",
            }}
          >
            Basierend auf deinen 30 Antworten und individueller Gewichtung
          </p>
        </div>

        {/* ─── Winner Card ─── */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "2px solid var(--accent)",
            borderRadius: 22,
            padding: "40px 36px",
            textAlign: "center",
            marginBottom: 44,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${sorted[0]?.color}, var(--accent-alt))`,
            }}
          />
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            Höchste Übereinstimmung
          </div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: 8,
            }}
          >
            {sorted[0]?.name}
          </div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(40px, 8vw, 60px)",
              fontWeight: 800,
              background: `linear-gradient(135deg, ${sorted[0]?.color}, var(--accent))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {sorted[0]?.score.toFixed(1)}%
          </div>
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--text-mid)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {sorted[0]?.reasoning}
          </p>
        </div>

        {/* ─── Full Ranking ─── */}
        <div style={{ marginBottom: 44 }}>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--text)",
              marginBottom: 22,
            }}
          >
            Komplettes Ranking
          </h3>

          {sorted.map((party, i) => (
            <div
              key={party.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "18px 24px",
                marginBottom: 10,
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderLeft: `5px solid ${party.color}`,
                animation: "fadeIn 0.5s ease",
                animationDelay: `${i * 0.06}s`,
                animationFillMode: "both",
              }}
              onClick={() =>
                setExpandedParty(
                  expandedParty === party.name ? null : party.name
                )
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                {/* Rank */}
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 14,
                    fontWeight: 700,
                    color: i === 0 ? "var(--accent)" : "var(--text-dim)",
                    minWidth: 30,
                  }}
                >
                  #{i + 1}
                </span>

                {/* Color dot */}
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: party.color,
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${party.color}40`,
                  }}
                />

                {/* Party name */}
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--text)",
                    minWidth: 140,
                    flex: "0 0 auto",
                  }}
                >
                  {party.name}
                </span>

                {/* Bar */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 100,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: 8,
                      background: "var(--bg-bar)",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${(party.score / Math.max(topScore, 1)) * 100}%`,
                        height: "100%",
                        background: party.color,
                        borderRadius: 4,
                        transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
                        transitionDelay: `${i * 0.08}s`,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "var(--text)",
                      minWidth: 58,
                      textAlign: "right",
                    }}
                  >
                    {party.score.toFixed(1)}%
                  </span>
                </div>

                {/* Expand arrow */}
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-dim)",
                    transform:
                      expandedParty === party.name
                        ? "rotate(180deg)"
                        : "none",
                    transition: "transform 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Expanded reasoning */}
              {expandedParty === party.name && party.reasoning && (
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "var(--text-mid)",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {party.reasoning}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ─── Topic Breakdown ─── */}
        {results.topicBreakdown && results.topicBreakdown.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <button
              onClick={() => setShowTopics(!showTopics)}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                padding: "16px 32px",
                background: "var(--bg-card)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: 60,
                cursor: "pointer",
                width: "100%",
                transition: "all 0.2s ease",
              }}
            >
              {showTopics
                ? "Themen-Details ausblenden ▲"
                : "Themen-Details anzeigen ▼"}
            </button>

            {showTopics && (
              <div style={{ marginTop: 20 }}>
                {results.topicBreakdown.map((topic, idx) => {
                  const topEntries = Object.entries(topic.scores || {}).sort(
                    (a, b) => b[1] - a[1]
                  );
                  const topParty = topEntries[0];
                  const topPartyColor =
                    PARTIES.find((p) => p.name === topParty?.[0])?.color ||
                    "var(--accent)";

                  return (
                    <div
                      key={idx}
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        padding: "16px 20px",
                        marginBottom: 8,
                        animation: "fadeIn 0.3s ease",
                        animationDelay: `${idx * 0.03}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: 11,
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                              color: "var(--accent)",
                              fontWeight: 500,
                            }}
                          >
                            {topic.topic}
                          </span>
                          <span
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: 11,
                              color: "var(--text-dim)",
                            }}
                          >
                            Gewichtung: {importances[topic.questionId] || 5}/10
                          </span>
                        </div>
                        {topParty && (
                          <span
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: 12,
                              color: topPartyColor,
                              background: "var(--bg-bar)",
                              padding: "4px 12px",
                              borderRadius: 20,
                              fontWeight: 500,
                            }}
                          >
                            Top: {topParty[0]} ({topParty[1]}%)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ─── Disclaimer ─── */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "24px 28px",
            marginBottom: 44,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "var(--text-dim)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            ⚠️ Hinweis: Diese Auswertung wurde von einer KI erstellt und dient
            ausschließlich als Orientierungshilfe. Die Analyse basiert auf dem
            Vergleich deiner Antworten mit den Wahlprogrammen der Parteien. Für
            eine fundierte Wahlentscheidung empfehlen wir, die Wahlprogramme
            selbst zu lesen und mehrere Informationsquellen zu nutzen.
          </p>
        </div>

        {/* ─── Restart ─── */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onRestart}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              padding: "18px 52px",
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: 60,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Erneut starten
          </button>
        </div>
      </div>
    </div>
  );
}
