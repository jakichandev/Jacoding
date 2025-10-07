import type { Project } from "../types/Project/Project";

export const projects: Array<Project> = [
  {
    label: "MeteoMaster",
    image: "meteo.png",
    body: "Il mio Vanilla meteo attraverso l'utilizzo di API REST, CSS con Tailwind",
    stack: [
      { icon: "html.svg", name: "HTML" },
      { icon: "javascript.svg", name: "Javascript" },
      { icon: "tailwind.svg", name: "Tailwind" },
    ],
    links: {
      github: "https://github.com/jakichandev/my_meteo",
    },
  },
  {
    label: "Tifodb",
    image: "tifodb.png",
    body: "Piattaforma dedicata agli appassionati del tifo calcistico, informazioni sulle curve italiane e non",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind" },
      { icon: "firebase.svg", name: "Firebase" },
    ],
    links: {
      github: "https://github.com/jakichandev/tifodb",
      online: "https://tifodb.netlify.app/",
    },
  },
];
