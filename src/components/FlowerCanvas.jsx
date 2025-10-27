// src/components/FlowerCanvas.jsx
import React, { useRef, useEffect } from "react";

/**
 * Props:
 *  - count: número de partículas
 *  - imageSrc: (opcional) ruta a la imagen de la flor/pétalo. Si no, dibuja círculos.
 *  - speedFactor: velocidad global
 */
export default function FlowerCanvas({ count = 40, imageSrc = null, speedFactor = 1 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // cargar imagen si se pasó imageSrc
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      imgRef.current = img;
    }

    // inicializar partículas
    function initParticles() {
      const arr = [];
      for (let i = 0; i < count; i++) {
        const size = 8 + Math.random() * 28; // tamaño en px
        arr.push({
          x: Math.random() * window.innerWidth,
          y: -Math.random() * window.innerHeight, // empezar arriba
          vx: (Math.random() - 0.5) * 0.6, // deriva horizontal
          vy: 0.5 + Math.random() * 1.8, // velocidad vertical
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.02,
          size,
          opacity: 0.6 + Math.random() * 0.4,
        });
      }
      particlesRef.current = arr;
    }
    initParticles();

    function draw() {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.x += p.vx * speedFactor;
        p.y += p.vy * speedFactor;
        p.rot += p.vrot * speedFactor;

        // dibujar imagen si existe
        if (imgRef.current && imgRef.current.complete) {
          const img = imgRef.current;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          const s = p.size;
          ctx.drawImage(img, -s / 2, -s / 2, s, s);
          ctx.restore();
        } else {
          // fallback: dibuja una forma tipo pétalo
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size * 0.9, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,150,180,0.9)"; // color suave
          ctx.fill();
          ctx.restore();
        }

        // si sale de pantalla -> reiniciar arriba
        if (p.y > window.innerHeight + 50 || p.x < -100 || p.x > window.innerWidth + 100) {
          p.x = Math.random() * window.innerWidth;
          p.y = -20 - Math.random() * 200;
          p.vx = (Math.random() - 0.5) * 0.6;
          p.vy = 0.6 + Math.random() * 2;
          p.size = 8 + Math.random() * 28;
          p.opacity = 0.6 + Math.random() * 0.4;
        }
      }
    }

    function loop() {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count, imageSrc, speedFactor]);

  // overlay: fixed, arriba de todo, pointer-events none
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999, // por delante de todo
        pointerEvents: "none",
      }}
    />
  );
}
