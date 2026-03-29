import { useState, useEffect } from "react";
import PARTIES from "../data/parties.js";
import QUESTIONS from "../data/questions.js";
import { getCandidate } from "../data/candidates.js";

export default function ResultsPage({ results, importances, region, onRestart }) {
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
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexShrink: 0,
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

      {/* Results Content */}
      <div
        style={{
          flex: 1,
          padding: "40px 20px 60px",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 800,
                color: "var(--text)",
                marginBottom: 8,
              }}
            >
              Dein Ergebnis
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-mid)",
              }}
            >
              Basierend auf deinen 30 Antworten und individueller Gewichtung
            </p>
          </div>

          {/* Winner Card */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "36px 32px",
              textAlign: "center",
              marginBottom: 36,
              boxShadow: "var(--shadow-md)",
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
                height: 5,
                background: sorted[0]?.color,
              }}
            />
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              Höchste Übereinstimmung
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: sorted[0]?.color,
                  display: "inline-block",
                  boxShadow: `0 0 12px ${sorted[0]?.color}40`,
                }}
              />
              <span
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 800,
                  color: "var(--text)",
                }}
              >
                {sorted[0]?.name}
              </span>
            </div>

            <div
              style={{
                fontSize: "clamp(36px, 7vw, 56px)",
                fontWeight: 800,
                color: sorted[0]?.color === "#000000" || sorted[0]?.color === "#000" ? "var(--text)" : sorted[0]?.color,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              {sorted[0]?.score.toFixed(1)}%
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--text-mid)",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              {sorted[0]?.reasoning}
            </p>

            {/* Candidate Photo */}
            {(() => {
              const candidate = getCandidate(region || "bundesweit", sorted[0]?.name);
              if (!candidate) return null;
              return (
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      margin: "0 auto 10px",
                      overflow: "hidden",
                      border: `3px solid ${sorted[0]?.color === "#000" || sorted[0]?.color === "#000000" ? "var(--accent)" : sorted[0]?.color}`,
                      boxShadow: `0 0 20px ${sorted[0]?.color}30`,
                    }}
                  >
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
                    {candidate.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 2 }}>
                    {candidate.role}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Full Ranking */}
          <div style={{ marginBottom: 36 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "var(--text)",
                marginBottom: 16,
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
                  borderRadius: 10,
                  padding: "14px 20px",
                  marginBottom: 8,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderLeft: `5px solid ${party.color}`,
                  boxShadow: "var(--shadow-sm)",
                  animation: "fadeIn 0.4s ease",
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: "both",
                }}
                onClick={() =>
                  setExpandedParty(
                    expandedParty === party.name ? null : party.name
                  )
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Rank */}
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: i === 0 ? "var(--accent)" : "var(--text-dim)",
                      minWidth: 28,
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
                      border: party.color === "#FFED00" ? "1px solid #999" : "none",
                    }}
                  />

                  {/* Party name */}
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "var(--text)",
                      minWidth: 130,
                      flex: "0 0 auto",
                    }}
                  >
                    {party.name}
                  </span>

                  {/* Bar */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 80,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: 10,
                        background: "var(--bg-bar)",
                        borderRadius: 5,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(party.score / Math.max(topScore, 1)) * 100}%`,
                          height: "100%",
                          background: party.color,
                          borderRadius: 5,
                          transition: "width 1s cubic-bezier(.4,0,.2,1)",
                          transitionDelay: `${i * 0.08}s`,
                          border: party.color === "#FFED00" ? "1px solid #ccc" : "none",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "var(--text)",
                        minWidth: 54,
                        textAlign: "right",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {party.score.toFixed(1)}%
                    </span>
                  </div>

                  {/* Expand arrow */}
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text-dim)",
                      transform:
                        expandedParty === party.name
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 0.2s ease",
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
                      marginTop: 14,
                      paddingTop: 14,
                      borderTop: "1px solid var(--border)",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "var(--text-mid)",
                      animation: "fadeIn 0.25s ease",
                    }}
                  >
                    {party.reasoning}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Topic Breakdown */}
          {results.topicBreakdown && results.topicBreakdown.length > 0 && (
            <div style={{ marginBottom: 36 }}>
              <button
                onClick={() => setShowTopics(!showTopics)}
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "14px 28px",
                  background: "var(--bg-card)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.2s ease",
                  boxShadow: "var(--shadow-sm)",
                  fontFamily: "inherit",
                }}
              >
                {showTopics
                  ? "Themen-Details ausblenden ▲"
                  : "Themen-Details anzeigen ▼"}
              </button>

              {showTopics && (
                <div style={{ marginTop: 16 }}>
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
                          borderRadius: 8,
                          padding: "12px 16px",
                          marginBottom: 6,
                          animation: "fadeIn 0.25s ease",
                          animationDelay: `${idx * 0.02}s`,
                          animationFillMode: "both",
                          boxShadow: "var(--shadow-sm)",
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
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: 0.5,
                                textTransform: "uppercase",
                                color: "var(--accent)",
                              }}
                            >
                              {topic.topic}
                            </span>
                            <span
                              style={{
                                fontSize: 11,
                                color: "var(--text-dim)",
                                fontWeight: 500,
                              }}
                            >
                              Gewichtung: {importances[topic.questionId] || 5}/10
                            </span>
                          </div>
                          {topParty && (
                            <span
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: topPartyColor === "#FFED00" ? "#999" : topPartyColor,
                                background: "var(--bg-bar)",
                                padding: "3px 10px",
                                borderRadius: 6,
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

          {/* Disclaimer */}
          <div
            style={{
              background: "var(--info-bg)",
              border: "1px solid var(--info-border)",
              borderRadius: 10,
              padding: "20px 24px",
              marginBottom: 36,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "var(--info-text)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong>Hinweis:</strong> Diese Auswertung wurde von einer KI (Claude Opus 4.6)
              erstellt und dient ausschließlich als Orientierungshilfe. Die Analyse basiert
              auf dem Vergleich deiner Antworten mit den offiziellen Wahlprogrammen der Parteien.
              Für eine fundierte Wahlentscheidung empfehlen wir, die Wahlprogramme selbst zu
              lesen und mehrere Informationsquellen zu nutzen.
            </p>
          </div>

          {/* Restart */}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={onRestart}
              style={{
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 48px",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "var(--shadow-md)",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#004A7F";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "var(--accent)";
                e.target.style.transform = "none";
              }}
            >
              Erneut starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
