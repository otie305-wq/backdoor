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
  if (r < 0.65) return 0.10 + Math.random() * 0.30;
  if (r < 0.90) return 0.40 + Math.random() * 0.20;
  return 0.60 + Math.random() * 0.20;
}

function makeParticle(w: number, h: number): Particle {
  let x: number, y: number;

  // Bias 55% of particles toward edges
  if (Math.random() < 0.55) {
    const edge = Math.floor(Math.random() * 4);
    const zone = 0.22;
    if (edge === 0) { x = Math.random() * w * zone; y = Math.random() * h; }
    else if (edge === 1) { x = w - Math.random() * w * zone; y = Math.random() * h; }
    else if (edge === 2) { x = Math.random() * w; y = Math.random() * h * zone; }
    else { x = Math.random() * w; y = h - Math.random() * h * zone; }
  } else {
    x = Math.random() * w;
    y = Math.random() * h;
  }

  return {
    x,
    y,
    char: Math.random() < 0.5 ? "0" : "1",
    size: 10 + Math.random() * 16,
    opacity: randomOpacity(),
    vx: (Math.random() - 0.5) * 0.35,
    vy: 0.25 + Math.random() * 0.55,
    coral: Math.random() < 0.70,
  };
}

function centerMultiplier(x: number, y: number, w: number, h: number): number {
  const dx = Math.abs(x - w / 2) / (w / 2);
  const dy = Math.abs(y - h / 2) / (h / 2);
  const dist = Math.sqrt(dx * dx + dy * dy) / Math.sqrt(2);
  return 0.25 + dist * 0.75;
}

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];

    function count() {
      return window.innerWidth < 768 ? 80 : 160;
    }

    function init() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      particles = Array.from({ length: count() }, () =>
        makeParticle(canvas!.width, canvas!.height)
      );
    }

    function tick() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        const mult = centerMultiplier(p.x, p.y, w, h);
        const alpha = Math.min(0.80, p.opacity * mult);
        ctx!.font = `${p.size}px monospace`;
        ctx!.fillStyle = p.coral
          ? `rgba(255,107,107,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx!.fillText(p.char, p.x, p.y);

        p.x += p.vx;
        p.y += p.vy;

        // Gentle random drift
        p.vx += (Math.random() - 0.5) * 0.015;
        if (p.vx > 0.5) p.vx = 0.5;
        if (p.vx < -0.5) p.vx = -0.5;

        // Wrap vertically, randomise x on re-entry
        if (p.y > h + p.size) {
          p.y = -p.size;
          p.x = Math.random() * w;
          p.char = Math.random() < 0.5 ? "0" : "1";
          p.opacity = randomOpacity();
        }
        if (p.x < -p.size) p.x = w + p.size;
        if (p.x > w + p.size) p.x = -p.size;
      }

      raf = requestAnimationFrame(tick);
    }

    function onResize() {
      init();
    }

    init();
    tick();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        display: "block",
      }}
    />
  );
}
