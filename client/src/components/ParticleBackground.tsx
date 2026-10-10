import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  velocity: number;
  color: "#67e8f9" | "#a78bfa";
};

const MAX_DPR = 2;
const MAX_PARTICLES = 64;

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let devicePixelRatio = 1;
    let particles: Particle[] = [];

    const createParticles = () => {
      const count = Math.min(MAX_PARTICLES, Math.max(24, Math.floor(window.innerWidth / 22)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.25 + 0.3,
        velocity: (Math.random() - 0.5) * 0.08,
        color: Math.random() > 0.5 ? "#67e8f9" : "#a78bfa",
      }));
    };

    const resize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(window.innerWidth * devicePixelRatio);
      canvas.height = Math.floor(window.innerHeight * devicePixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      frameId = 0;
      if (document.hidden || reduceMotion.matches) return;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const particle of particles) {
        particle.y += particle.velocity;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        context.globalAlpha = 0.22;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      frameId = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (!frameId && !document.hidden && !reduceMotion.matches) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const stop = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotionPreference = () => {
      stop();
      if (reduceMotion.matches) context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      else start();
    };

    resize();
    start();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    reduceMotion.addEventListener("change", handleMotionPreference);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reduceMotion.removeEventListener("change", handleMotionPreference);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
