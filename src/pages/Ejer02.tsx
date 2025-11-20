/*
Componente que represente un Card
El card lo vas a obtener de la libreria componetes de flowbite
El card tiene que mostrar:
- icono
- titulo
- ulr y textoUrl
- descripcion
*/

import type { JSX } from "react";
import CalabazaIcon from "../components/icons/Calabaza";

interface Props {
    Icon?: () => JSX.Element;
    title: string;
    url: string;
    textoUrl: string;
    children: React.ReactNode;
}


function Card({Icon=CalabazaIcon, title, url, textoUrl, children}: Props) {
    return (
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-2xl shadow-xs">
            <Icon/>
            <a href={url}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
            </a>
            <p className="mb-3 text-body">{children}</p>
            <a href="#" className="inline-flex font-medium items-center text-fg-brand hover:underline">
                {textoUrl}
                <svg className="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" /></svg>
            </a>
        </div>

    )

}

export default function Ejer02() {
    return <Card Icon={CalabazaIcon} title="Need a help in Claim?" textoUrl="See our guideline" url="http://google.es">
        Go to this step by step guideline process on how to certify for your weekly benefits:
    </Card>;
}