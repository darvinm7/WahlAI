import { useState, useEffect } from "react";

function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ width: "100%", marginBottom: 0 }}>
      <div
        style={{
          width: "100%",
          height: 6,
          background: "var(--bg-bar)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "var(--accent)",
            transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
    </div>
  );
}

function ImportanceSlider({ value, onChange }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text-mid)",
          }}
        >
          Wie wichtig ist dir dieses Thema?
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color:
              value >= 7
                ? "var(--accent)"
                : value >= 4
                ? "var(--text-mid)"
                : "var(--text-dim)",
            minWidth: 36,
            textAlign: "right",
            transition: "color 0.2s ease",
          }}
        >
          {value}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontSize: 11,
            color: "var(--text-dim)",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          unwichtig
        </span>
        <input
          type="range"
          min={1}
          max={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <span
          style={{
            fontSize: 11,
            color: "var(--text-dim)",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          sehr wichtig
        </span>
      </div>
    </div>
  );
}

function InfoBox({ facts }) {
  const [open, setOpen] = useState(false);

  if (!facts || facts.length === 0) return null;

  return (
    <div
      style={{
        marginTop: 16,
        background: "var(--info-bg)",
        border: "1px solid var(--info-border)",
        borderRadius: 10,
        overflow: "hidden",
        transition: "all 0.2s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "var(--info-text)",
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 16 }}>&#128161;</span>
        <span>Wusstest du schon?</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          &#9660;
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: "0 16px 14px",
            animation: "fadeIn 0.25s ease",
          }}
        >
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              listStyleType: "none",
            }}
          >
            {facts.map((fact, i) => (
              <li
                key={i}
                style={{
                  fontSize: 13,
                  color: "var(--info-text)",
                  lineHeight: 1.65,
                  marginBottom: i < facts.length - 1 ? 8 : 0,
                  position: "relative",
                  paddingLeft: 4,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: -18,
                    top: 0,
                    fontSize: 8,
                    lineHeight: "22px",
                    color: "var(--info-text)",
                    opacity: 0.5,
                  }}
                >
                  &#9679;
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ModeToggle({ mode, onModeChange }) {
  return (
    <div
      style={{
        display: "flex",
        background: "var(--bg-bar)",
        borderRadius: 8,
        padding: 3,
        marginBottom: 20,
        gap: 2,
      }}
    >
      <button
        onClick={() => onModeChange("statement")}
        style={{
          flex: 1,
          padding: "10px 16px",
          fontSize: 13,
          fontWeight: mode === "statement" ? 700 : 500,
          color: mode === "statement" ? "#fff" : "var(--text-mid)",
          background: mode === "statement" ? "var(--accent)" : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          transition: "all 0.2s ease",
          fontFamily: "inherit",
        }}
      >
        Aussage bewerten
      </button>
      <button
        onClick={() => onModeChange("freetext")}
        style={{
          flex: 1,
          padding: "10px 16px",
          fontSize: 13,
          fontWeight: mode === "freetext" ? 700 : 500,
          color: mode === "freetext" ? "#fff" : "var(--text-mid)",
          background: mode === "freetext" ? "var(--accent)" : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          transition: "all 0.2s ease",
          fontFamily: "inherit",
        }}
      >
        Freitext schreiben
      </button>
    </div>
  );
}

function StatementInput({ statement, stance, onStanceChange }) {
  const options = [
    { value: "agree", label: "Stimme zu", color: "var(--success)" },
    { value: "neutral", label: "Neutral", color: "var(--wom-orange)" },
    { value: "disagree", label: "Stimme nicht zu", color: "var(--danger)" },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      {/* Statement card */}
      <div
        style={{
          padding: "20px 22px",
          background: "var(--accent-bg)",
          border: "2px solid var(--accent-light)",
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            color: "var(--text-dim)",
            marginBottom: 10,
          }}
        >
          Aussage
        </div>
        <p
          style={{
            fontSize: 17,
            fontWeight: 600,
            lineHeight: 1.6,
            color: "var(--text)",
            margin: 0,
          }}
        >
          &bdquo;{statement}&ldquo;
        </p>
      </div>

      {/* Agree / Neutral / Disagree buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        {options.map((opt) => {
          const isSelected = stance === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onStanceChange(opt.value)}
              style={{
                flex: 1,
                padding: "14px 12px",
                fontSize: 14,
                fontWeight: isSelected ? 700 : 600,
                color: isSelected ? "#fff" : opt.color,
                background: isSelected ? opt.color : "var(--bg-card)",
                border: `2px solid ${isSelected ? opt.color : "var(--border)"}`,
                borderRadius: 10,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
                boxShadow: isSelected ? "var(--shadow-md)" : "var(--shadow-sm)",
                transform: isSelected ? "scale(1.03)" : "none",
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function QuestionPage({
  question,
  index,
  total,
  answer,
  importance,
  answerMode,
  stance,
  onAnswer,
  onImportance,
  onModeChange,
  onStanceChange,
  onNext,
  onBack,
}) {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
  }, [index]);

  const mode = answerMode || "statement";
  const MIN_LENGTH = 20;
  const freetextValid = (answer || "").trim().length >= MIN_LENGTH;
  const stanceValid = stance === "agree" || stance === "neutral" || stance === "disagree";
  const isValid = mode === "freetext" ? freetextValid : stanceValid;
  const remaining = MIN_LENGTH - (answer || "").trim().length;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          background: "var(--accent)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              color: "var(--accent)",
            }}
          >
            W
          </div>
          <span style={{ fontWeight: 700, fontSize: 16 }}>WahlAI</span>
        </div>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Frage {index + 1} von {total}
        </span>
      </div>

      {/* Progress Bar */}
      <ProgressBar current={index + 1} total={total} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px 40px",
          opacity: anim ? 1 : 0,
          transform: anim ? "none" : "translateX(20px)",
          transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <div style={{ width: "100%", maxWidth: 680 }}>
          {/* Topic Badge */}
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "var(--accent-light)",
              padding: "6px 14px",
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            {question.topic}
          </div>

          {/* Question */}
          <h2
            style={{
              fontSize: "clamp(19px, 3vw, 24px)",
              fontWeight: 700,
              lineHeight: 1.55,
              color: "var(--text)",
              marginBottom: 24,
              marginTop: 0,
            }}
          >
            {question.question}
          </h2>

          {/* Info Box */}
          <InfoBox facts={question.infoFacts} />

          {/* Mode Toggle */}
          <div style={{ marginTop: 20 }}>
            <ModeToggle mode={mode} onModeChange={onModeChange} />
          </div>

          {/* Input Area based on mode */}
          {mode === "freetext" ? (
            <>
              {/* Answer Textarea */}
              <textarea
                value={answer || ""}
                onChange={(e) => onAnswer(e.target.value)}
                placeholder="Beschreibe deine Meinung ausführlich in eigenen Worten..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--text)",
                  background: "var(--bg-card)",
                  border: `2px solid ${freetextValid ? "var(--success)" : "var(--border)"}`,
                  borderRadius: 10,
                  resize: "vertical",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                  fontFamily: "inherit",
                  boxShadow: "var(--shadow-sm)",
                }}
                onFocus={(e) => {
                  if (!freetextValid)
                    e.target.style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  if (!freetextValid) e.target.style.borderColor = "var(--border)";
                }}
              />

              {/* Character counter */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: freetextValid ? "var(--success)" : "var(--text-dim)",
                  marginTop: 8,
                  transition: "color 0.2s ease",
                }}
              >
                {remaining > 0
                  ? `Noch mindestens ${remaining} Zeichen`
                  : "\u2713 Ausreichend beantwortet"}
              </div>
            </>
          ) : (
            <StatementInput
              statement={question.statement}
              stance={stance}
              onStanceChange={onStanceChange}
            />
          )}

          {/* Importance Slider */}
          <ImportanceSlider
            value={importance || 5}
            onChange={onImportance}
          />

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 32,
              gap: 16,
            }}
          >
            <button
              onClick={onBack}
              disabled={index === 0}
              style={{
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 28px",
                background: "var(--bg-card)",
                color:
                  index === 0 ? "var(--text-dim)" : "var(--text-mid)",
                border: `1px solid ${
                  index === 0 ? "var(--border)" : "var(--text-dim)"
                }`,
                borderRadius: 8,
                cursor: index === 0 ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                opacity: index === 0 ? 0.5 : 1,
                fontFamily: "inherit",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Zurück
            </button>

            <button
              onClick={onNext}
              disabled={!isValid}
              style={{
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 40px",
                background: isValid ? "var(--accent)" : "var(--bg-bar)",
                color: isValid ? "#fff" : "var(--text-dim)",
                border: "none",
                borderRadius: 8,
                cursor: isValid ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
                boxShadow: isValid ? "var(--shadow-md)" : "none",
                fontFamily: "inherit",
              }}
            >
              {index === total - 1 ? "Auswertung starten" : "Weiter"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
