/*
Crea un componente que reciba 2 valores numericos
El componente tambien recibe una funcion a ejecutarse
EJ: function sumar(n1,n2) {
    return n1+n2
}

El componente tendra que mostrar el resultado de ejecutar la operacion con esos 2 numeros
*/

interface Props {
    n1: number;
    n2: number;
    operacion: (n1:number, n2:number) => number;
}

function Suma({n1, n2, operacion}: Props){
    return <div>
       El resultado es: {operacion(n1, n2)}
    </div>
}


export default function Ejer03(){
    const sumar = (n1:number, n2:number) => n1 + n2;
    return <Suma n1={96} n2={36} operacion={sumar}/>
}