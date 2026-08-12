import { useEffect, useRef } from "react";

interface Props {
  isPlaying?: boolean;
}

export function AudioVisualizerBackground({ isPlaying = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system
    const numParticles = Math.min(Math.floor(width / 22), 60);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? "#38bdf8" : Math.random() > 0.5 ? "#818cf8" : "#c084fc",
    }));

    let waveOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Speed factor based on play state
      const speedMultiplier = isPlaying ? 2.2 : 1.0;
      waveOffset += isPlaying ? 0.03 : 0.012;

      // Draw subtle background audio waves
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseAlpha = 0.08 + w * 0.03;
        ctx.strokeStyle =
          w === 0
            ? `rgba(56, 189, 248, ${baseAlpha})`
            : w === 1
              ? `rgba(129, 140, 248, ${baseAlpha})`
              : `rgba(192, 132, 252, ${baseAlpha})`;
        ctx.lineWidth = 1.5 + w * 0.5;

        const waveY = height * (0.45 + w * 0.1);
        const amplitude = (isPlaying ? 35 : 18) + w * 10;
        const frequency = 0.003 - w * 0.0005;

        for (let x = 0; x <= width; x += 12) {
          const y =
            waveY +
            Math.sin(x * frequency + waveOffset + w * 1.5) * amplitude * Math.cos(x * 0.001);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (isPlaying ? 1.3 : 1.0), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = isPlaying ? 12 : 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating Animated Ambient Glow Orbs */}
      <div
        className={`absolute top-[-10%] left-[-10%] size-[500px] rounded-full blur-[120px] transition-all duration-1000 ${
          isPlaying ? "bg-accent/30 animate-pulse" : "bg-accent/15"
        }`}
      />
      <div
        className={`absolute top-[30%] right-[-10%] size-[600px] rounded-full blur-[140px] transition-all duration-1000 ${
          isPlaying ? "bg-primary/35 animate-pulse" : "bg-primary/15"
        }`}
      />
      <div
        className={`absolute bottom-[-10%] left-[20%] size-[550px] rounded-full blur-[130px] transition-all duration-1000 ${
          isPlaying ? "bg-purple-600/25 animate-pulse" : "bg-purple-600/10"
        }`}
      />

      {/* HTML Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-80" />
    </div>
  );
}
