import type { Project } from "../types/Project/Project";

export const projects: Array<Project> = [
  {
    label: "MeteoMaster",
    image: "meteo.png",
    body: "My Vanilla JS weather app using OpenWeather API to get real-time weather data",
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
    body: `A football database app to search all info about fans of your favorite team (rivalries, friendship, stadium, groups etc.).
    You can test and manage data using this demo account: email: test@test.it | password: TestTest`,
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
  {
    label: "Vibeshare",
    image: "vibeshare.png",
    body: "Chat with a simulated authentication (Local storage) to share positive vibes with other users",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind" },
      { icon: "typescript.svg", name: "Typescript" },
    ],
    links: {
      github: "https://github.com/jakichandev/vibeshare",
    },
  },
  {
    label: "Refrigerator Manager",
    image: "",
    body: "A refrigerator management app to learn Zustand (in progress)",
    stack: [{ icon: "react.svg", name: "React" }],
    links: {
      github: "https://github.com/jakichandev/Zustand-Refrigerator",
    },
  },
];
