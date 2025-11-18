import React from "react";

export const routes = [
  {
    to: null,
    title: "Creación de componentes",
    description: "",
    component: React.lazy(() => import("../pages/Home")),
  },
  {
    to: "Ejem1",
    title: "Componente usando clases",
    description: "Muestra como crear un componente usando clases. Obsoleto.",
    component: React.lazy(() => import("../pages/Ejem01")),
  },
  {
    to: "Ejem2",
    title: "Componentes dentro de componentes",
    description: "Uso de componentes anidados.",
    component: React.lazy(() => import("../pages/Ejem02")),
  },
  {
    to: "Ejem3",
    title: "Componentes condicionales",
    description: "Uso del if.",
    component: React.lazy(() => import("../pages/Ejem03")),
  },
  {
    to: "Ejem4",
    title: "Props",
    description: "Paso de props al componente.",
    component: React.lazy(() => import("../pages/Ejem04")),
  },
 
];