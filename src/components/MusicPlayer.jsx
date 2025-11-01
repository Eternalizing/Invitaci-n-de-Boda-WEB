"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Heart, MapPin } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function MusicAndConfirm({ musicSrc, confirmUrl, locationUrl }) {
  const [playing, setPlaying] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const audioRef = useRef(null);
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  // 🔒 Bloquear scroll mientras el botón está activo
  useEffect(() => {
    if (showStartButton) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showStartButton]);

  // 🎞 Animación de controles según scroll
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

  // ▶️ Iniciar música
  const startMusic = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setPlaying(true);
      setShowStartButton(false);
    } catch (err) {
      console.log("Autoplay bloqueado:", err);
    }
  };

  // ⏯ Alternar play / pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      {/* 💌 Botón inicial con fondo translúcido */}
      {showStartButton && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center 
                     bg-[#eaf6ef]/80 backdrop-blur-md backdrop-saturate-150"
          initial={{ opacity: 1 }}
          animate={{ opacity: showStartButton ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            onClick={startMusic}
            className="px-10 py-5 rounded-3xl bg-white/25 text-[#14532d] font-semibold text-xl
                       shadow-lg ring-1 ring-white/40 backdrop-blur-xl border border-white/30
                       flex items-center gap-2 hover:bg-white/35 hover:shadow-2xl 
                       transition-all duration-300 ease-in-out"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            💌 ¡Abrir Invitación!
          </motion.button>
        </motion.div>
      )}

      {/* 🔊 Control de música (arriba derecha) */}
      {!showStartButton && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controlsTop}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(8px)",
            borderRadius: "16px",
            padding: "10px 15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            cursor: "pointer",
          }}
          onClick={togglePlay}
          title={playing ? "Pausar música" : "Reproducir música"}
        >
          <motion.div
            animate={
              playing
                ? { scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }
                : { scale: 1, opacity: 1 }
            }
            transition={
              playing
                ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
                : {}
            }
          >
            {playing ? <Volume2 size={26} /> : <VolumeX size={26} />}
          </motion.div>
        </motion.div>
      )}

      {/* 🎵 Audio */}
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />

      {/* 💍 Botones inferiores */}
      {!showStartButton && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controlsBottom}
          style={{
            position: "fixed",
            bottom: "30px",
            left: "2%",
            zIndex: 9999,
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
              backgroundColor: "#14532d",
              color: "white",
              padding: "12px 18px",
              borderRadius: "9999px",
              width: "200px",
              fontWeight: "600",
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#166534")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#14532d")}
          >
            <Heart size={16} />
            Confirmar Asistencia
          </a>

          {/* Ubicación */}
          <a
            href={locationUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ffffff",
              color: "#14532d",
              border: "2px solid #14532d",
              padding: "12px 18px",
              width: "140px",
              borderRadius: "9999px",
              fontWeight: "600",
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#14532d";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#14532d";
            }}
          >
            <MapPin size={16} />
            Ubicación
          </a>
        </motion.div>
      )}
    </>
  );
}
