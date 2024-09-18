import './App.css'
import { Tab } from './components/Tab'
import { Reproductor } from './components/Reproductor'
import { Dado6 } from './components/Dado6'
import { useState } from 'react'

function App() {
  const [numeroPadre,setNumeroPadre] = useState(null);

  return (
    <div className='contenedor-principal'>
      <Tab/>
      <div id='contenedor-musica-dado'>
        <Reproductor/>
        <Dado6 className={"dado-fase-poder"} texto={"Fase de Poder"} numeroPadre={numeroPadre} setNumeroPadre={setNumeroPadre}/>
      </div>
    </div>
  )
}

export default App
