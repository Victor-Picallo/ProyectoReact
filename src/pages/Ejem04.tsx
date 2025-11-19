interface Props {
    color: string;
    size?: number;
}

function MiComponente({color}: Props) {
    return <div>Soy un componente de color {color}</div>
}

export default function Ejem04() {
    return <MiComponente color="red"/>
}