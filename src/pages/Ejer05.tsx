import { useState } from "react"


export default function Ejercicio_05() {

  const [lanzamiento, setLanzamiento] = useState<number | null>(null)

  const tirar = () => setLanzamiento(Math.floor(Math.random() * 6) + 1 ) 

  return <button onClick={tirar}>
    {lanzamiento || 'pulsame'}
  </button>
}