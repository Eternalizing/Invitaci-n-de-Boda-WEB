'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Section2() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-gradient-to-b from-[#f7fdf8] via-[#e8f5e9] to-[#f3f8f4] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        {/* Título principal */}
        <h2 className="text-center text-base font-semibold text-[#3D5A40] tracking-widest uppercase">
          Nuestra celebración
        </h2>

        <div className="mt-4 text-center">
          <p className="text-sm text-[#3D5A40]/70 italic">Con inmensa alegría,</p>
          <p className="mt-1 text-4xl sm:text-5xl font-bold text-[#2E7D32] drop-shadow-sm">
            Leandro Padilla y Marli Rodríguez
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#3D5A40]/80 max-w-lg mx-auto">
            Invitan a sus seres queridos a compartir la bendición de su matrimonio.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

          {/* Ceremonia */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gradient-to-br from-[#2E7D32] via-[#4CAF50] to-[#A5D6A7] border-white/40 shadow-lg" />
            <div className="relative flex h-full flex-col overflow-hidden text-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold text-white drop-shadow-md max-lg:text-center">
                  Ceremonia Religiosa
                </p>
                <p className="mt-2 text-sm text-white/90 max-lg:text-center leading-relaxed">
                  Parroquia San Juan Bautista<br />
                  Sábado 20 de diciembre 2025
                </p>
              </div>
              <div className="relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4884.698706526498!2d-70.2537345!3d8.6208539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579ca61f8d03%3A0x66fe7674a15bad93!2sParroquia%20Mar%C3%ADa%20Inmaculada%20Alto%20Barinas%20Norte!5e1!3m2!1ses!2sve!4v1761534837631!5m2!1ses!2sve"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0 rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Invitación */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#A5D6A7] max-lg:rounded-t-4xl border-white/40 shadow-lg" />
            <div className="relative flex h-full flex-col overflow-hidden text-white">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold drop-shadow-md text-center">Invitación Especial</p>
                <p className="mt-3 text-sm text-white/90 text-center leading-relaxed">
                  Con la bendición de Dios y el amor de nuestras familias, te invitamos a compartir con nosotros este día tan especial donde uniremos nuestras vidas para siempre.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-0 py-10 sm:px-10">
                <img
                  alt="Nombres de los novios"
                  src="/img/nombre h.png"
                  className="w-full max-lg:max-w-xs drop-shadow-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Recepción */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#A5D6A7] border-white/40 shadow-lg" />
            <div className="relative flex h-full flex-col overflow-hidden text-white">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold drop-shadow-md text-center">Recepción</p>
                <p className="mt-2 text-sm text-white/90 text-center leading-relaxed">
                  Acompáñanos a continuar la celebración en el <br />
                  <strong>Salón de Fiesta Varsovias</strong> <br />
                </p>
              </div>
              <div className="relative flex-1 items-center max-lg:py-6 lg:pb-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4884.743836156648!2d-70.2705384!3d8.6173616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b57a0ad3b7531%3A0xa53beb84f1f16ea7!2sSALON%20DE%20FIESTA%20VARSOVIAS!5e1!3m2!1ses!2sve!4v1761534921700!5m2!1ses!2sve"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0 rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Regalos */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#A5D6A7] border-white/40 shadow-lg max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden text-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold drop-shadow-md text-center">Sugerencias de regalo</p>
                <p className="mt-3 text-sm text-white/90 text-center leading-relaxed">
                  El mejor regalo es tu presencia, pero si deseas tener un detalle con nosotros, te dejamos con cariño esta opción:  
                  <br />
                  <strong>💌 Lista de obsequios próximamente</strong>
                </p>
              </div>
              <div className="relative min-h-120 w-full grow flex items-center justify-center text-white/90 italic px-6 text-center">
                “Gracias por acompañarnos en este momento tan especial.”
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
