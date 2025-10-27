'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Bloquea el scroll
    document.body.style.overflow = 'hidden'

    // Espera a que la imagen principal esté cargada
    const img = new Image()
    img.src = '/img/Portada.png' // cambia por la imagen importante
    img.onload = () => {
      setTimeout(() => {
        setLoading(false)
        document.body.style.overflow = 'auto'
      }, 500) // un pequeño delay para suavizar
    }

    // seguridad: si tarda mucho (10s), quitar loader igual
    const timeout = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto'
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#fce4ec] via-[#f8bbd0] to-[#fff0f5]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="text-[#e84393] text-6xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ❤️
        </motion.div>
        <p className="mt-4 text-[#14532d] text-lg font-semibold tracking-wide">
          Cargando con amor...
        </p>
      </motion.div>
    </motion.div>
  )
}
