export default function ErrorScreen({ error, onRetry, onRestart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          background: "var(--wom-blue)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          color: "#fff",
        }}
      >
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

      {/* Error Content */}
      <div
        style={{
          flex: 1,
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
            borderRadius: 14,
            padding: "44px 36px",
            maxWidth: 500,
            textAlign: "center",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#FEE4E2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: 28,
            }}
          >
            !
          </div>

          <h2
            style={{
              fontWeight: 700,
              fontSize: 22,
              color: "var(--text)",
              marginBottom: 12,
            }}
          >
            Analyse fehlgeschlagen
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "var(--text-mid)",
              lineHeight: 1.7,
              marginBottom: 10,
            }}
          >
            Bei der KI-Analyse ist ein Fehler aufgetreten. Deine Antworten
            sind gespeichert — du kannst es erneut versuchen.
          </p>

          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "var(--danger)",
              marginBottom: 32,
              wordBreak: "break-word",
              background: "var(--bg-bar)",
              padding: "10px 14px",
              borderRadius: 8,
            }}
          >
            {error}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={onRetry}
              style={{
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 32px",
                background: "var(--wom-blue)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "var(--shadow-sm)",
                fontFamily: "inherit",
              }}
            >
              Erneut versuchen
            </button>
            <button
              onClick={onRestart}
              style={{
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 28px",
                background: "var(--bg-card)",
                color: "var(--text-mid)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
              }}
            >
              Neu starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
