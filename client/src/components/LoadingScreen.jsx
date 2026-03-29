import { useState, useEffect, useRef } from "react";

const MESSAGES = [
  "Analysiere deine Antworten ...",
  "Vergleiche mit Wahlprogrammen ...",
  "Berechne \u00dcbereinstimmungen ...",
  "Erstelle dein pers\u00f6nliches Ergebnis ...",
];

function NeuralNetworkCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Create neural network nodes in layers
    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;
    const layers = [4, 6, 8, 6, 4];
    const nodes = [];

    layers.forEach((count, li) => {
      const x = (w / (layers.length + 1)) * (li + 1);
      for (let ni = 0; ni < count; ni++) {
        const y = (h / (count + 1)) * (ni + 1);
        nodes.push({
          x,
          y,
          layer: li,
          radius: 4 + Math.random() * 3,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    });

    // Build connections between adjacent layers
    const connections = [];
    nodes.forEach((n1, i) => {
      nodes.forEach((n2, j) => {
        if (n2.layer === n1.layer + 1) {
          if (Math.random() < 0.6) {
            connections.push({ from: i, to: j, opacity: 0.1 + Math.random() * 0.15 });
          }
        }
      });
    });

    // Particles
    const particles = [];
    const spawnParticle = () => {
      if (connections.length === 0) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const from = nodes[conn.from];
      const to = nodes[conn.to];
      particles.push({
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        progress: 0,
        speed: 0.01 + Math.random() * 0.015,
        size: 2 + Math.random() * 2,
      });
    };

    let frame = 0;
    const animate = () => {
      const cw = canvas.getBoundingClientRect().width;
      const ch = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, cw, ch);
      frame++;

      if (frame % 5 === 0) spawnParticle();

      // Draw connections
      connections.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(6, 182, 212, ${conn.opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const px = p.fromX + (p.toX - p.fromX) * p.progress;
        const py = p.fromY + (p.toY - p.fromY) * p.progress;
        const alpha = p.progress < 0.5 ? p.progress * 2 : (1 - p.progress) * 2;

        // Glow
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
        gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha * 0.8})`);
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.phase += node.pulseSpeed;
        const pulse = 0.5 + Math.sin(node.phase) * 0.5;
        const r = node.radius + pulse * 2;

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        glow.addColorStop(0, `rgba(6, 182, 212, ${0.08 + pulse * 0.08})`);
        glow.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.3 + pulse * 0.4})`;
        ctx.fill();

        // Center
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 243, 255, ${0.4 + pulse * 0.5})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export default function LoadingScreen({ progress }) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setDotCount((d) => (d + 1) % 4), 500);
    return () => clearInterval(iv);
  }, []);

  const msgIdx = Math.min(Math.floor(progress / 25), 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
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

      {/* Loading Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          animation: "fadeIn 0.5s ease",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 560, width: "100%" }}>
          {/* Neural Network Animation */}
          <div
            style={{
              width: "100%",
              height: 220,
              marginBottom: 32,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "linear-gradient(145deg, #0c1a20 0%, #0a0a0f 50%, #0c1520 100%)",
              position: "relative",
            }}
          >
            <NeuralNetworkCanvas />
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(6,182,212,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Neuronales Netzwerk aktiv
            </div>
          </div>

          <h2
            style={{
              fontWeight: 700,
              fontSize: 24,
              color: "var(--text)",
              marginBottom: 10,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            KI-Analyse l&auml;uft{".".repeat(dotCount)}
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "var(--text-mid)",
              marginBottom: 40,
              minHeight: 24,
            }}
          >
            {MESSAGES[msgIdx]}
          </p>

          {/* Steps */}
          <div style={{ marginBottom: 32, textAlign: "left", maxWidth: 340, margin: "0 auto 32px" }}>
            {MESSAGES.map((msg, i) => {
              const isDone = i < msgIdx;
              const isActive = i === msgIdx;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    opacity: isDone ? 0.5 : isActive ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: isDone ? "#fff" : isActive ? "#fff" : "var(--text-dim)",
                      background: isDone
                        ? "var(--success)"
                        : isActive
                        ? "var(--accent)"
                        : "var(--bg-bar)",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    {isDone ? "\u2713" : i + 1}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "var(--text)" : "var(--text-mid)",
                    }}
                  >
                    {msg}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div style={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
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
                  width: `${Math.min(progress, 100)}%`,
                  height: "100%",
                  background: "var(--gradient-accent)",
                  borderRadius: 4,
                  transition: "width 0.8s ease",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--text-dim)",
                marginTop: 8,
              }}
            >
              {Math.round(Math.min(progress, 100))}% abgeschlossen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
