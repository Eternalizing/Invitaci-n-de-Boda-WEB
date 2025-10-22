import React, { useEffect, useState } from 'react'
import './efectos.css'

export default function Countdown() {
  const targetDate = new Date('2025-12-20T00:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

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

  return (
    <div className="flex flex-col items-center justify-center text-center py-4">
 
      <div className="bg-white p-5 rounded-2xl shadow-xl border-0 border-yellow-400 glow-effect opacity-90">


        
        <div className="flex gap-8 text-4xl font-semibold ">
          <div className="flex flex-col items-center bg">
            <span className='text-[#3D5A40]'>{timeLeft.days}</span>
            <span className="text-sm text-gray-10">Días</span>
          </div>
          <div className="flex flex-col items-center text-[#3D5A40]">
            <span>{timeLeft.hours}</span>
            <span className="text-sm text-black">Horas</span>
          </div>
          <div className="flex flex-col items-center text-[#3D5A40]">
            <span>{timeLeft.minutes}</span>
            <span className="text-sm text-black">Minutos</span>
          </div>
          <div className="flex flex-col items-center text-[#3D5A40]">
            <span>{timeLeft.seconds}</span>
            <span className="text-sm text-black">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  )
}
