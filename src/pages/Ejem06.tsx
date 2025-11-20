interface Props {
    mensaje: string;
    color: string;
    modoFormateo: (texto:string) => string;
}

function MiComponente({mensaje, color, modoFormateo}: Props){
    return <div style={{backgroundColor: color}}>
       Me has dicho: {modoFormateo(mensaje)}
    </div>
}

export default function Ejem06(){
    const formatearElTexto = (texto:string) => texto.toUpperCase();
    
    return<MiComponente mensaje="Cebem" color="red" modoFormateo={formatearElTexto}/>
}