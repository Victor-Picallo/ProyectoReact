import React from "react";

export default function Ejem10({initialValue=200}){
    const [numero,setNumero]=React.useState(initialValue);

    const HandleIncrement = () => setNumero((prev) => prev + 1)
    
    return<div>
        {numero} <br/>
        <button onClick={HandleIncrement}>Incrementar</button>
        <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
    </div>
}