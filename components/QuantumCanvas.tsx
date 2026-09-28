"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  orbitRadius: number;
  angle: number;
  angularSpeed: number;
}

interface FloatingSymbol {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

export default function QuantumCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 800;
    };
    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Particle nodes for quantum entanglement network
    const particleCount = Math.min(Math.floor((width * height) / 12000), 55);
    const quantumColors = ["#00e5ff", "#38bdf8", "#60a5fa", "#2563eb", "#93c5fd"];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: quantumColors[Math.floor(Math.random() * quantumColors.length)],
        alpha: Math.random() * 0.4 + 0.2,
        orbitRadius: Math.random() * 70 + 25,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    // Physics symbols floating in background
    const physicsSymbols = [
      "|ψ⟩",
      "ĤΨ = EΨ",
      "Δx·Δp ≥ ℏ/2",
      "ℏ",
      "E = ℏω",
      "λ = h/p",
      "∇×B",
      "e^{i(kx-ωt)}",
      "⟨ϕ|ψ⟩",
      "c = 1/√(μ₀ε₀)",
      "ρ = |Ψ|²",
      "iℏ ∂Ψ/∂t",
    ];

    const symbols: FloatingSymbol[] = physicsSymbols.map((txt) => ({
      text: txt,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.14 + 0.06,
      size: Math.random() * 3 + 12,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Quantum Interference Wave Packets
      const waveColors = [
        "rgba(0, 229, 255, 0.06)",
        "rgba(56, 189, 248, 0.05)",
        "rgba(37, 99, 235, 0.04)",
      ];

      for (let w = 0; w < waveColors.length; w++) {
        ctx.save();
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = waveColors[w];
        ctx.beginPath();
        const freq = 0.004 + w * 0.0015;
        const amp = 40 + w * 12;
        const speed = time * (0.8 + w * 0.2);
        const yBase = height * 0.48 + Math.sin(time + w) * 20;

        for (let x = 0; x < width; x += 10) {
          // Modulated wave packet envelope: e^(-((x - x0)/sigma)^2)
          const envelope = Math.exp(-Math.pow((x - width * 0.55) / (width * 0.45), 2));
          const y = yBase + Math.sin(x * freq + speed) * amp * envelope + Math.cos(x * freq * 2 - speed * 0.7) * 15 * envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      // 2. Draw Floating Physics Equations & Dirac Bra-Kets
      ctx.save();
      ctx.font = "italic 13px 'DM Mono', monospace";
      for (let s = 0; s < symbols.length; s++) {
        const sym = symbols[s];
        sym.x += sym.vx;
        sym.y += sym.vy;

        if (sym.x < -50) sym.x = width + 50;
        if (sym.x > width + 50) sym.x = -50;
        if (sym.y < -50) sym.y = height + 50;
        if (sym.y > height + 50) sym.y = -50;

        ctx.fillStyle = `rgba(148, 163, 184, ${sym.alpha})`;
        ctx.fillText(sym.text, sym.x, sym.y);
      }
      ctx.restore();

      // 3. Update & Draw Quantum Particles & Entanglement Mesh
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse perturbation
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 3.5;
          p.y -= (dy / dist) * force * 3.5;
        }

        // Draw particle node
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect entanglement lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            const lineAlpha = (1 - dist2 / 110) * 0.22;
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "auto",
      }}
      aria-hidden="true"
    />
  );
}
