import type { Profile } from "../types/Profile/Profile";

export const profile: Profile = {
  name: "Jacopo",
  surname: "Gianfaldoni",
  age: 23,
  contacts: [
    {
      label: "email",
      content: "gianfaldoni.jaco@gmail.com",
      icon: "/mail.svg",
    },
    { label: "phone", content: 3291299673, icon: "/phone.svg" },
  ],
  avatar: {
    image: "/me.JPG",
    label: "Jacopo",
  },
  workExperience: [
    {
      name: "Scot",
      where: "Calenzano, Italia",
      duration: 5,
      stage: false,
      when: { from: 2020, to: 2025 },
    },
  ],
  aboutMe: `Dopo 5 anni come operatore tecnico video in un service
dedicato ad eventi e congressi ho deciso di provare a crearmi
l’opportunità di diventare uno sviluppatore frontend. Perché
Frontend? Non che disprezzi il backend, però il frontend lo
sento più il mio campo dato che alle superiori ho studiato
graphic design e mi sento più portato a sviluppare l’esperienza
e l’aspetto di un’applicazione Web (pur sapendo che il mondo
del frontend va molto oltre al concetto di grafica e web design).
Con il mio studio da autodidatta sono arrivato a saper
sviluppare Web Applications con React o NextJs, styled
components e saper gestire il loro stato sia locale che globale,
inoltre con lo studio di NodeJS riesco a creare un backend con
Express realizzando CRUD applications e autenticazione con
JWT integrando la comunicazione con database come
MongoDB o mySQL. Ho tanta voglia di provare a confrontarmi
con questo mondo e tanta voglia di imparare nuove tecnologie.
Il mio obiettivo futuro? Sviluppare in flutter e avere piena
padronanza dell’IA`,
};
