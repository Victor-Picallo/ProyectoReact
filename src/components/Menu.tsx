import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { routes } from "../routes/routesConfig"; // Ajusta la ruta según tu proyecto

// Filtra rutas por tipo
const ejemplos = routes.filter(r => r.to && r.to.startsWith("Ejem"));
const ejercicios = routes.filter(r => r.to && r.to.startsWith("Ejer"));

const secciones = [
  { title: "Ejemplos", items: ejemplos },
  { title: "Ejercicios", items: ejercicios },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md z-50">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-stretch py-8">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Menú</span>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open
              ? <XMarkIcon className="w-8 h-8 text-white" />
              : <Bars3Icon className="w-8 h-8 text-white" />
            }
          </button>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex md:gap-20 mt-6 justify-between w-full">
          {secciones.map(section => (
            <div key={section.title} className="flex flex-col items-start">
              <span className="uppercase text-xs text-gray-200 mb-1">{section.title}</span>
              <div className="flex flex-wrap gap-3">
                {section.items.map(item => (
                  <Link
                    key={item.to}
                    to={`/${item.to}`}
                    className="px-2 py-1 rounded hover:bg-blue-800 hover:text-blue-100 transition focus-visible:outline-blue-400"
                  >
                    {item.to}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800 px-4 py-3">
          {secciones.map(section => (
            <div key={section.title} className="mb-3">
              <div className="uppercase text-xs text-gray-200 mb-1">{section.title}</div>
              <div className="flex flex-wrap gap-2">
                {section.items.map(item => (
                  <Link
                    key={item.to}
                    to={`/${item.to}`}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 rounded hover:bg-blue-800 hover:text-blue-100"
                  >
                    {item.to}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
