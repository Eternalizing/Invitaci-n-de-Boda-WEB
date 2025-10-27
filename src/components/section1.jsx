import React from 'react'
import { motion } from 'framer-motion'

export default function Section1() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fff0f5] via-[#fde2e4] to-[#fff8f6]">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

          {/* Título y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:max-w-lg"
          >
            <h1 className="text-4xl font-bold tracking-tight text-[#b23a48] sm:text-6xl drop-shadow-sm">
              Código de vestimenta
            </h1>
            <p className="mt-4 text-lg text-[#3D5A40] leading-relaxed">
              Sugerimos atuendo <span className="font-semibold text-[#b23a48]">formal elegante</span>.<br />
              🌿 <span className="font-medium text-[#3D5A40]">Color reservado para las damas de honor:</span> Verde.<br />
              🤍 <span className="font-medium text-[#b23a48]">El color blanco está reservado para la novia.</span><br /><br />
              ¡Luce tu mejor sonrisa y disfruta de la velada!
            </p>
          </motion.div>

          <div>
            <div className="mt-10">
              {/* Galería decorativa */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 
                lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">

                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {/* Columna 1 */}
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-[#f8bbd0]/50 shadow-md shadow-pink-100 sm:opacity-0 lg:opacity-100"
                      >
                        <img alt="" src="img/a1.jpg" className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-[#f8bbd0]/50 shadow-md shadow-pink-100">
                        <img alt="" src="img/a2.jpg" className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500" />
                      </motion.div>
                    </div>

                    {/* Columna 2 */}
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {["img/a3.jpg", "img/b5.jpg", "img/a4.jpg"].map((src, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-[#f8bbd0]/50 shadow-md shadow-pink-100"
                        >
                          <img alt="" src={src} className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Columna 3 */}
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {["img/a4.jpg", "img/b2.jpg"].map((src, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="h-64 w-44 overflow-hidden rounded-xl ring-1 ring-[#f8bbd0]/50 shadow-md shadow-pink-100"
                        >
                          <img alt="" src={src} className="size-full object-cover brightness-95 hover:brightness-105 transition-all duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-block rounded-md bg-gradient-to-r from-[#f8bbd0] to-[#fce4ec] 
                           px-8 py-3 text-center font-medium text-[#3D5A40] shadow-md 
                           hover:shadow-pink-200 hover:brightness-105 transition-all duration-300"
              >
                Confirmar Asistencia
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
