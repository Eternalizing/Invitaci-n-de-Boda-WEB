import React from 'react'
import { HeartIcon, CalendarDaysIcon, SparklesIcon } from '@heroicons/react/20/solid'

export default function Section3() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-pink-900 via-pink-700 to-pink-500 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]" />

      {/* CONTENIDO */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
        {/* ENCABEZADO */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-pink-200">Nuestra historia</p>
              <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
                <span className="block text-6xl sm:text-7xl text-pink-100">Leandro & Marli</span>
                <span className="block text-2xl sm:text-3xl text-pink-200 mt-2 font-light">Cómo comenzó nuestro amor</span>
              </h1>
              <p className="mt-6 text-xl text-pink-100/90">
                Todo empezó con una mirada y una sonrisa que lo cambió todo. Desde ese día, nuestros caminos se cruzaron
                para construir una historia llena de fe, risas y sueños compartidos.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Leandro y Marli juntos"
            src="/img/nosotros.png"
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 object-cover"
          />
        </div>

        {/* HISTORIA DETALLADA */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-pink-50/90 lg:max-w-lg">
              <p>
                En cada paso que dimos juntos aprendimos a conocernos, apoyarnos y soñar con un futuro en el que nuestras
                metas y corazones se unieran. Cada momento, desde las pequeñas aventuras hasta los grandes retos,
                fortaleció nuestro amor.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-pink-50/90">
                <li className="flex gap-x-3">
                  <HeartIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-300" />
                  <span>
                    <strong className="font-semibold text-white">Un amor sincero.</strong> Forjado en la amistad, la fe y
                    el respeto mutuo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CalendarDaysIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-300" />
                  <span>
                    <strong className="font-semibold text-white">Una fecha inolvidable.</strong> 20 de diciembre de 2025 —
                    el día en que diremos “Sí, acepto” frente a Dios y nuestros seres queridos.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-300" />
                  <span>
                    <strong className="font-semibold text-white">Un nuevo comienzo.</strong> Dos almas, un solo camino.
                    Lo mejor está por venir.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Cada historia de amor es única, y esta es la nuestra: sencilla, real y escrita con el corazón. Gracias por
                acompañarnos en este capítulo tan importante de nuestras vidas.
              </p>

              <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">Con amor, Leandro & Marli</h2>
              <p className="mt-6">
                Esperamos compartir contigo este día tan especial lleno de alegría, familia y mucha gratitud. ¡Nos vemos
                en la boda!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
