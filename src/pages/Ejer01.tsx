/*Añade tailwind a tu proyecto
Crea un componente que se le pase como prop un valor en grados centigrados
y muestre por patanlla ese valor en fahrenheit y centigrados.
*/
interface Props {
    gradosC: number;
}

function MiComponente({ gradosC = 30 }: Props) {
    const toFahrenheit = (celsius: number) => celsius * 9 / 5 + 32
    return <div>º{gradosC}/º{toFahrenheit(gradosC)}</div>
}

export default function Ejer01() {
    return <MiComponente gradosC={25} />;
}