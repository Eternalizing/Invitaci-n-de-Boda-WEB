import React from 'react'
import { motion } from 'framer-motion'

export default function Section1() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f6fff8] via-[#e9f5e1] to-[#f9fff9]">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

          {/* --- Contenedor de información con fondo blanco cristal --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:max-w-lg backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-xl p-8"
          >
            <h1 className="text-4xl font-bold tracking-tight text-[#2d6a4f] sm:text-6xl drop-shadow-sm">
              Código de vestimenta
            </h1>
            <p className="mt-4 text-lg text-[#2d6a4f]/90 leading-relaxed">
              Sugerimos atuendo <span className="font-semibold text-[#1b4332]">formal elegante</span>.<br />
              🌿 <span className="font-medium text-[#1b4332]">Color reservado para las damas de honor:</span> Verde.<br />
              🤍 <span className="font-medium text-[#1b4332]">El color blanco está reservado para la novia.</span><br /><br />
              ¡Luce tu mejor sonrisa y disfruta de la velada!
            </p>
          </motion.div>

          {/* --- Galería decorativa --- */}
          <div className="mt-10 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 
              lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">

                <div className="flex items-center space-x-6 lg:space-x-8">
                  {/* Columna 1 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {["img/m4.jpg", "img/m3.jpg"].map((src, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-white/40 shadow-lg shadow-[#b7e4c7]/30 backdrop-blur-md bg-white/30"
                      >
                        <img
                          alt=""
                          src={src}
                          className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Columna 2 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {["img/m6.jpg", "img/m6.jpg", "img/m4.jpg"].map((src, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-white/40 shadow-lg shadow-[#b7e4c7]/30 backdrop-blur-md bg-white/30"
                      >
                        <img
                          alt=""
                          src={src}
                          className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Columna 3 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {["img/m2.jpg", "img/m1.jpg"].map((src, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-white/40 shadow-lg shadow-[#b7e4c7]/30 backdrop-blur-md bg-white/30"
                      >
                        <img
                          alt=""
                          src={src}
                          className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}
