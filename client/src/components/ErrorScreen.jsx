export default function ErrorScreen({ error, onRetry, onRestart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeIn 0.5s ease",
      }}
    >
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 22,
          padding: "52px 44px",
          maxWidth: 520,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 52, marginBottom: 24 }}>⚠️</div>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 26,
            color: "var(--text)",
            marginBottom: 14,
          }}
        >
          Analyse fehlgeschlagen
        </h2>

        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 15,
            color: "var(--text-mid)",
            lineHeight: 1.75,
            marginBottom: 10,
          }}
        >
          Bei der KI-Analyse ist ein Fehler aufgetreten. Deine Antworten
          sind gespeichert — du kannst es erneut versuchen.
        </p>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: "var(--danger)",
            marginBottom: 36,
            wordBreak: "break-word",
            background: "var(--bg-bar)",
            padding: "12px 16px",
            borderRadius: 10,
          }}
        >
          {error}
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onRetry}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 40px",
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: 60,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Erneut versuchen
          </button>
          <button
            onClick={onRestart}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 36px",
              background: "transparent",
              color: "var(--text-mid)",
              border: "1px solid var(--border)",
              borderRadius: 60,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Neu starten
          </button>
        </div>
      </div>
    </div>
  );
}
