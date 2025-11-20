//Crea un componente boton, que al pulsarlo muestre como texto del boton
//"Me has pulsado" y se ponga de color "rojo"
//Al dejar de pulsarlo, vuelve a la normalidad
import { useState } from "react";

function MiBoton({ style }: { style: React.CSSProperties }) {
  const [pulsado, setPulsado] = useState(false);

  // Se usa onMouseDown y onMouseUp, y también onMouseLeave para casos donde el cursor sale del botón
  const handleMouseDown = () => setPulsado(true);
  const handleMouseUp = () => setPulsado(false);
  const handleMouseLeave = () => setPulsado(false);

  // Solo aplica el estilo rojo si está pulsado
  const estiloBoton = pulsado ? style : {};

  return (
    <button
      style={estiloBoton}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {pulsado ? "Me has pulsado" : "Púlsame"}
    </button>
  );
}

export default function Ejem09() {
  const miEstilos = {
    backgroundColor: "red"
  };
  return <MiBoton style={miEstilos} />;
}
