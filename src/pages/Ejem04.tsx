function MiComponente({color}) {
    return <div>Soy un componente de color {color}</div>
}

export default function Ejem04() {
    return <MiComponente color="red"/>
}