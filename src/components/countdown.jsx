import React, { useEffect, useState } from 'react'
import './efectos.css'

export default function Countdown() {
  const targetDate = new Date('2025-12-20T00:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())
  const [isScrolled, setIsScrolled] = useState(false)

  function getTimeRemaining() {
    const now = new Date().getTime()
    const distance = targetDate - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out z-[9999] 
        ${isScrolled
          ? 'top-4 scale-90'
          : 'top-[550px] scale-120'
        }`}
    >
      <div
        className={`backdrop-blur-lg bg-white/40 border border-white/30 rounded-3xl shadow-xl px-6 py-4 text-center transition-all duration-500`}
      >
        {isScrolled && (
          <p className="text-sm font-medium text-[#3D5A40] mb-1">
            🌿 Falta poco para el gran día 🌿
          </p>
        )}
        <div className="flex gap-6 text-3xl font-semibold text-[#3D5A40]">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-xs text-gray-700">Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-xs text-gray-700">Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-xs text-gray-700">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-xs text-gray-700">Seg</span>
          </div>
        </div>
      </div>
    </div>
  )
}
