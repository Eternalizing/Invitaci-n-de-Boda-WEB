"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Heart, MapPin, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function MusicAndConfirm({ musicSrc, confirmUrl, locationUrl }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showArrow, setShowArrow] = useState(true);
  const audioRef = useRef(null);
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  // Ajustar volumen
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Animación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 80) {
        controlsBottom.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
        controlsTop.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      } else {
        controlsBottom.start({ opacity: 0, y: 30 });
        controlsTop.start({ opacity: 0, y: -20 });
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsTop, controlsBottom]);

  // Reproducir / pausar música
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
    setShowArrow(false); // ocultar flecha al interactuar
  };

  return (
    <>
      {/* 🎵 Botón de música (arriba derecha) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controlsTop}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 99999,
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        {/* ⬅️ Flecha animada que apunta al botón */}
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              x: [-5, 0, -5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              color: "#000",
              textShadow: "0 0 6px rgba(0,0,0,0.4)",
            }}
          >
            <ArrowRight size={22} />
          </motion.div>
        )}

        {/* 🔊 Botón de play/pausa */}
        <div
          onClick={togglePlay}
          style={{ cursor: "pointer" }}
          title={playing ? "Pausar música" : "Reproducir música"}
        >
          {playing ? <Volume2 size={28} /> : <VolumeX size={28} />}
        </div>

        {/* Control de volumen */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{
            width: "80px",
            accentColor: "#d45ba0",
            cursor: "pointer",
          }}
        />

        <audio ref={audioRef} src={musicSrc} loop preload="auto" />
      </motion.div>

      {/* 💌 Botones inferiores */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controlsBottom}
        style={{
          position: "fixed",
          bottom: "30px",
          left: "2%",
          transform: "translateX(-50%)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {/* Confirmar asistencia */}
        <a
          href={confirmUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #e84393, #ff7675)",
            color: "white",
            padding: "12px 10px",
            borderRadius: "9999px",
            width: "200px",
            fontWeight: "600",
            fontSize: "0.9rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          <Heart size={16} />
          Confirmar Asistencia
        </a>

        {/* Ver ubicación */}
        <a
          href={locationUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #74b9ff, #0984e3)",
            color: "white",
            padding: "12px 10px",
            width: "140px",
            borderRadius: "9999px",
            fontWeight: "600",
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          <MapPin size={16} />
          Ubicación
        </a>
      </motion.div>
    </>
  );
}
