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
  {
    to: "Ejem5",
    title: "Estilos en react",
    description: "Como poner estilos en react.",
    component: React.lazy(() => import("../pages/Ejem05")),
  },
  {
    to: "Ejem6",
    title: "Pasar funciones de padre a hijo",
    description: "Usar Props y pasar funciones.",
    component: React.lazy(() => import("../pages/Ejem06")),
  },
  {
    to: "Ejem7",
    title: "Hook useState",
    description: "Como usar variables que varian **IMPORTANTE**.",
    component: React.lazy(() => import("../pages/Ejem07")),
  },
  {
    to: "Ejem8",
    title: "Como pasar children",
    description: "Como pasar children de un componente ademas de tipar como React.ReactNode.",
    component: React.lazy(() => import("../pages/Ejem08")),
  },
  {
    to: "Ejem9",
    title: "Null",
    description: "Null.",
    component: React.lazy(() => import("../pages/Ejem09")),
  },
  {
    to: "Ejem10",
    title: "Null",
    description: "Null.",
    component: React.lazy(() => import("../pages/Ejem10")),
  }
];