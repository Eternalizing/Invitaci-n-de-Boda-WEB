import Section1 from './components/section1'
import Hero from './components/Hero'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import FlowerCanvas from './components/FlowerCanvas'
import MusicAndConfirm from './components/MusicPlayer'
import Loader from './components/Loader' // 👈 nuevo import

import './App.css'

function App() {
  return (
    <>

      {/* Efecto de flores (detrás de todo) */}
      <FlowerCanvas
        count={45}
        imageSrc="img/flor1.png"
        speedFactor={1}
      />

      {/* Contenido principal */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Section2 />
        <Section1 />
        <Section3 />
        <Section4 />
      </div>

      {/* Botón de música y confirmación */}
      <MusicAndConfirm
        musicSrc="music/Que Más Puedo Pedir.mp3"
        confirmUrl="https://docs.google.com/forms/d/e/1FAIpQLSdyItW5FTRkJdvd78Cg_J89z76kYfFUAMJd_-nu0-i3vmfYWw/viewform?usp=header"
        locationUrl="https://maps.app.goo.gl/vz1wGCvoSEDr2oex9"
      />
    </>
  )
}

export default App
