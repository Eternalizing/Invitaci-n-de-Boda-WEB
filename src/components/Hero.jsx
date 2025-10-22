


'use client'

import Countdown from './countdown'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Hero() {
 

  return (
    <div
  className="relative bg-gray-900 bg-cover bg-center"
  style={{
    backgroundImage: "url('/img/Portada.png')",
  }}
>

    

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
         
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-white/10 hover:ring-white/20">
              — Mateo 19:6
            
            </div>
          </div>
          <div className="text-center">
            <div class="card">
              <h1 className="bg text-2xl font-semibold tracking-tight text-balance text-[#3D5A40] sm:text-4xl py-1">
              “Así que ya no son dos, sino una sola carne;
por tanto, lo que Dios unió, no lo separe el hombre.”
            </h1>
            <div class="blob"></div>
              </div>      
            

            <p className="mt-8 text-lg font-medium text-pretty text-gray-0 sm:text-xl/8 bg-white ">
             Próximamente 20 de diciembre de 2025
            </p>
            <Countdown></Countdown>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Confirmar Asistencia
              </a>
              <a href="#" className="text-sm/6 font-semibold text-black px-3.5 py-2.5 rounded-md bg-white">
                Lugar <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}

