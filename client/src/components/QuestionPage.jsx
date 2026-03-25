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
            background: "var(--wom-blue)",
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
                ? "var(--wom-blue)"
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
        <span style={{ fontSize: 16 }}>💡</span>
        <span>Wusstest du schon?</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          ▼
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
                  ●
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

export default function QuestionPage({
  question,
  index,
  total,
  answer,
  importance,
  onAnswer,
  onImportance,
  onNext,
  onBack,
}) {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
  }, [index]);

  const MIN_LENGTH = 20;
  const isValid = (answer || "").trim().length >= MIN_LENGTH;
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
          background: "var(--wom-blue)",
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
              color: "var(--wom-blue)",
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
              color: "var(--wom-blue)",
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

          {/* Answer Textarea */}
          <textarea
            value={answer || ""}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder="Beschreibe deine Meinung ausführlich in eigenen Worten..."
            rows={5}
            style={{
              width: "100%",
              marginTop: 20,
              padding: "16px 18px",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text)",
              background: "var(--bg-card)",
              border: `2px solid ${isValid ? "var(--success)" : "var(--border)"}`,
              borderRadius: 10,
              resize: "vertical",
              outline: "none",
              transition: "border-color 0.3s ease",
              fontFamily: "inherit",
              boxShadow: "var(--shadow-sm)",
            }}
            onFocus={(e) => {
              if (!isValid)
                e.target.style.borderColor = "var(--accent)";
            }}
            onBlur={(e) => {
              if (!isValid) e.target.style.borderColor = "var(--border)";
            }}
          />

          {/* Character counter */}
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: isValid ? "var(--success)" : "var(--text-dim)",
              marginTop: 8,
              transition: "color 0.2s ease",
            }}
          >
            {remaining > 0
              ? `Noch mindestens ${remaining} Zeichen`
              : "✓ Ausreichend beantwortet"}
          </div>

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
                background: isValid ? "var(--wom-blue)" : "var(--bg-bar)",
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
