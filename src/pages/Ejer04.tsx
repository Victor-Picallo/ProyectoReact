import { useState } from "react"



function Boton() {

  function conmutador() {
    setToggle(!toggle)

  }

  const [toggle, setToggle] = useState(true)

  return <div> <button onClick={conmutador}>Click me</button>
          {toggle && <div>Texto cualquira</div>}
        </div>
} 

export default function Ejercicio_04() {

  

  return <Boton />
}