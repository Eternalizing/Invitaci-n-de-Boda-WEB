export default function Section4() {
  return (
    <div className="bg-gradient-to-b from-[#fff0f6] to-[#ffe4ec]">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white/10 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-20 backdrop-blur-lg ring-1 ring-white/30 shadow-xl">
          {/* Fondo decorativo suave */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 opacity-40 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#love-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="love-gradient">
                <stop stopColor="#f48fb1" />
                <stop offset={1} stopColor="#f8bbd0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Contenido principal */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-[#3a2d2d] sm:text-5xl">
              ¡Te esperamos!
            </h2>
            <p className="mt-6 text-lg text-[#4a3c3c] leading-relaxed">
              Estamos felices de compartir este momento tan especial contigo.  
              Cada sonrisa, abrazo y palabra harán de este día un recuerdo inolvidable.  
              Tu presencia será el mejor regalo que podamos recibir.
            </p>

            
          </div>

          {/* Imagen decorativa */}
          <div className="relative mt-16 h-80 lg:mt-8 flex items-center justify-center">
            <img
              alt="Decoración floral"
              src="/img/b1.jpg"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-xl bg-white/20 ring-1 ring-white/30 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
