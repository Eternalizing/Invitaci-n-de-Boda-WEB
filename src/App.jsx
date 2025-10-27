
import Section1 from './components/section1'
import Hero from './components/Hero'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import FlowerCanvas from './components/FlowerCanvas'
import MusicAndConfirm from './components/MusicPlayer'

import './App.css'

function App() {

  return (
    <>
     <FlowerCanvas
        count={45}
       imageSrc="public\img\flor1.png" // opcional: mejor si es PNG con transparencia
        speedFactor={1} 
      />
      <div style={{ position: "relative", zIndex: 1 }}>
      <Hero></Hero>
      <Section2></Section2>
      <Section1></Section1>
      <Section3></Section3>
      <Section4></Section4>
      </div>
        <MusicAndConfirm
        musicSrc="public\music\Que Más Puedo Pedir.mp3"
        confirmUrl="https://tuenlace.com/formulario" // <-- pon tu URL aquí
        locationUrl="https://maps.app.goo.gl/vz1wGCvoSEDr2oex9"
      />

    </>
  )
}

export default App
