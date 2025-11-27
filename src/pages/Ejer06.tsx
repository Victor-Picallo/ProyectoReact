import { useState } from "react"

/*
Mostrar una lista de cosas en pantalla.
El usuario podrá seleccionar (pulsando sobre alguna de ellas) y la cosa se resaltará
Aparecerá un mensaje por consola indicando que se ha seleccionado el elemento X (ej: 'se ha selec:1')
Por defecto, aparecerá marcado un elemento (el que se le pase por props)
*/
export default function Ejercicio_06(){
    const [selectedIndex, setSelectIndex] = useState(1)
    const items = ['Elem1', 'Elem2', 'Elem3', 'Elem4', 'Elem1']

    const handleChange = (index: number) => {
        setSelectIndex(index)
        console.log('Me has pulsado', index)
    }
    return <div>
        {items.map( (item,index) => 
            <div className={index===selectedIndex?'text-amber-100':''} key={index} 
            onClick={()=>handleChange(index)}>{item}</div> 
        )}
    </div>
}


/*
Version chatgpt

import { useState } from "react";

interface Props {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

function Componente({ children, isSelected, onClick }: Props) {
  return (
    <p 
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontWeight: isSelected ? "bold" : "normal"
      }}
    >
      {children}
    </p>
  );
}

export default function Ejercicio_06() {
  const items = ['Elem1', 'Elem2', 'Elem3', 'Elem4'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <Componente
          key={index}
          isSelected={index === selectedIndex}
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </Componente>
      ))}
    </div>
  );
}

*/