import { useState, useEffect } from "react";

function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ width: "100%", marginBottom: 36 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: "var(--text-dim)",
        }}
      >
        <span>
          Frage {current} von {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div
        style={{
          width: "100%",
          height: 6,
          background: "var(--bg-bar)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "linear-gradient(90deg, var(--accent), var(--accent-alt))",
            borderRadius: 3,
            transition: "width 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
    </div>
  );
}

function ImportanceSlider({ value, onChange }) {
  return (
    <div style={{ marginTop: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            color: "var(--text-dim)",
            letterSpacing: 0.3,
          }}
        >
          Wie wichtig ist dir dieses Thema?
        </span>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 24,
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
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            fontSize: 11,
            color: "var(--text-dim)",
            fontFamily: "'DM Mono', monospace",
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
            fontFamily: "'DM Mono', monospace",
            whiteSpace: "nowrap",
          }}
        >
          sehr wichtig
        </span>
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
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        opacity: anim ? 1 : 0,
        transform: anim ? "none" : "translateX(30px)",
        transition: "all 0.45s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 700 }}>
        <ProgressBar current={index + 1} total={total} />

        {/* Topic Badge */}
        <div
          style={{
            display: "inline-block",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "var(--accent)",
            background: "var(--accent-bg)",
            padding: "6px 16px",
            borderRadius: 20,
            marginBottom: 18,
          }}
        >
          {question.topic}
        </div>

        {/* Question */}
        <h2
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "clamp(20px, 3.5vw, 27px)",
            fontWeight: 600,
            lineHeight: 1.55,
            color: "var(--text)",
            marginBottom: 28,
            marginTop: 0,
          }}
        >
          {question.question}
        </h2>

        {/* Answer Textarea */}
        <textarea
          value={answer || ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder="Beschreibe deine Meinung ausführlich in eigenen Worten..."
          rows={6}
          style={{
            width: "100%",
            padding: 20,
            fontFamily: "'Source Serif 4', serif",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--text)",
            background: "var(--bg-card)",
            border: `2px solid ${isValid ? "var(--success)" : "var(--border)"}`,
            borderRadius: 14,
            resize: "vertical",
            outline: "none",
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => {
            if (!isValid)
              e.target.style.borderColor = "var(--accent-dim)";
          }}
          onBlur={(e) => {
            if (!isValid) e.target.style.borderColor = "var(--border)";
          }}
        />

        {/* Character counter */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
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
            marginTop: 36,
            gap: 16,
          }}
        >
          <button
            onClick={onBack}
            disabled={index === 0}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 32px",
              background: "transparent",
              color:
                index === 0 ? "var(--text-dim)" : "var(--text-mid)",
              border: `1px solid ${
                index === 0 ? "var(--border)" : "var(--text-dim)"
              }`,
              borderRadius: 60,
              cursor: index === 0 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              opacity: index === 0 ? 0.5 : 1,
            }}
          >
            ← Zurück
          </button>

          <button
            onClick={onNext}
            disabled={!isValid}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 44px",
              background: isValid ? "var(--accent)" : "var(--bg-bar)",
              color: isValid ? "#fff" : "var(--text-dim)",
              border: "none",
              borderRadius: 60,
              cursor: isValid ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              boxShadow: isValid
                ? "0 4px 20px rgba(0,0,0,0.15)"
                : "none",
            }}
          >
            {index === total - 1 ? "Auswertung starten 🚀" : "Weiter →"}
          </button>
        </div>
      </div>
    </div>
  );
}
