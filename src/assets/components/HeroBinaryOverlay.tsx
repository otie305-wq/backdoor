import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  char: string;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  coral: boolean;
}

function randomOpacity(): number {
  const r = Math.random();
  if (r < 0.60) return 0.05 + Math.random() * 0.10; // 0.05 – 0.15
  if (r < 0.90) return 0.15 + Math.random() * 0.08; // 0.15 – 0.23
  return 0.23 + Math.random() * 0.07;               // 0.23 – 0.30
}

function makeParticle(w: number, h: number): Particle {
  // Concentrate particles in the center 60% of the container
  const cx = w / 2;
  const cy = h / 2;
  const rx = w * 0.30;
  const ry = h * 0.38;

  const angle = Math.random() * Math.PI * 2;
  const r = Math.random();
  const x = cx + Math.cos(angle) * rx * r;
  const y = cy + Math.sin(angle) * ry * r;

  return {
    x,
    y,
    char: Math.random() < 0.5 ? "0" : "1",
    size: 9 + Math.random() * 14,
    opacity: randomOpacity(),
    vx: (Math.random() - 0.5) * 0.30,
    vy: 0.20 + Math.random() * 0.45,
    coral: Math.random() < 0.70,
  };
}

export default function HeroBinaryOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];

    const count = () => (window.innerWidth < 768 ? 40 : 80);

    function init() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      particles = Array.from({ length: count() }, () =>
        makeParticle(canvas!.width, canvas!.height)
      );
    }

    function tick() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        const alpha = Math.min(0.30, p.opacity);
        ctx!.font = `${p.size}px monospace`;
        ctx!.fillStyle = p.coral
          ? `rgba(255,107,107,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx!.fillText(p.char, p.x, p.y);

        p.x += p.vx;
        p.y += p.vy;

        p.vx += (Math.random() - 0.5) * 0.012;
        if (p.vx > 0.4) p.vx = 0.4;
        if (p.vx < -0.4) p.vx = -0.4;

        // Respawn near center when off-bounds
        if (
          p.y > h + p.size ||
          p.x < -p.size ||
          p.x > w + p.size
        ) {
          const next = makeParticle(w, h);
          p.x = next.x;
          p.y = next.y - h * 0.1; // re-enter slightly above center area
          p.char = Math.random() < 0.5 ? "0" : "1";
          p.opacity = randomOpacity();
          p.vx = next.vx;
          p.vy = next.vy;
        }
      }

      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(() => init());
    ro.observe(canvas);

    init();
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 20,
        display: "block",
      }}
    />
  );
}
