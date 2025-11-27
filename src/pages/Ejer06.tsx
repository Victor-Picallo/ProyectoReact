import { useState } from "react"

interface Props {
  children  :  React.ReactNode
}

function Componente({children} : Props) {

  
  return <p><strong>{children}</strong></p>
}

export default function Ejercicio_06() {
  const items = ['Elem1', 'Elem2', 'Elem3', 'Elem4']
  const [selectedIndex,setSelectedIndex] = useState(0)

  return <div >

   {items.map((item, index) => 
       <div key={index}>{item}</div>
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