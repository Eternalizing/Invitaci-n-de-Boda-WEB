'use client'

import { motion } from 'framer-motion'
import Countdown from './countdown'

export default function Hero() {
  return (
    <motion.div
      className="relative flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/portadafoto2.png')",
        backgroundColor: "#eaf6ef", // verde muy claro de fondo
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen w-screen">
        {/* Contenido central */}
        <motion.div
          className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Versículo */}
          <motion.div
            className="sm:mb-8 sm:flex sm:justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div
              className="relative rounded-full px-4 py-1 text-sm 
                         text-[#2f3b2f] backdrop-blur-md bg-white/40 
                         ring-1 ring-white/40 shadow-md shadow-[#b7e4c7]/30"
            >
              — Mateo 19:6
            </div>
          </motion.div>

          {/* Frase principal */}
          <motion.div
            className="card mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1
              className="text-[#2f3b2f] text-2xl font-semibold tracking-tight sm:text-4xl 
                         py-6 px-8 rounded-3xl shadow-lg 
                         backdrop-blur-xl bg-white/40 border border-white/40 
                         ring-1 ring-white/50"
            >
              “Así que ya no son dos, sino una sola carne; por tanto, lo que Dios unió, no lo separe el hombre.”
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            className="mt-10 inline-block text-[#2f3b2f] text-lg font-medium sm:text-xl py-3 px-10 
                       rounded-full shadow-md backdrop-blur-xl bg-white/40 border border-white/40 
                       ring-1 ring-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            💚 ¡Nos casamos! el <strong>20 de diciembre de 2025</strong>
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Countdown />
          </motion.div>
        </motion.div>

        {/* Decoración inferior con degradado suave */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 
                     transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] 
              w-[144.5rem] -translate-x-1/2 
              bg-gradient-to-r from-[#95d5b2] to-[#74c69d] opacity-25 
              sm:left-[calc(50%+36rem)] sm:w-[288.75rem]"
          />
        </div>
      </div>
    </motion.div>
  )
}
