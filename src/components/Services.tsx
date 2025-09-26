import GlassContainer from "./GlassContainer";
import { Heading } from "./Hero";
import Button from "./Button";
import { Link } from "react-router";

export interface CardData {
  label: string;
  img: string;
  desc?: string;
  link: string;
  index?: number;
}
const cards: CardData[] = [
  {
    label: "Siti web",
    img: "website.jpg",
    link: "/services/websites",
    desc: "Siti web sviluppati con le migliori tecnologie presenti sul mercato",
  },
  {
    label: "Web Applications",
    img: "applications.jpg",
    link: "/sevices/webapplications",
    desc: "Applicazioni strutturate per funzionare su un browser web come gestionali, dashboards, social network",
  },
  {
    label: "Templates",
    img: "./templates.jpg",
    link: "/services/templates",
    desc: "Template pronti e facilmente integrabili per sviluppatori",
  },
];

export const ServiceCard = ({ label, img, desc, link, index }: CardData) => {
  return (
    <GlassContainer
      className="box-border p-2.5 shrink-0 snap-center w-[22rem] border-2 border-opacity h-full"
      key={index}
    >
      <div className="relative z-20 h-[25rem]">
        <Heading
          className="text-4xl text-white bg-cover"
          text={label}
        ></Heading>
        <div
          style={{
            background: `url("${img}")`,
            backgroundSize: "cover",
          }}
          className={`w-48 h-48 rounded-full mx-auto my-4 bg-center inset-shadow-sm inset-shadow-txt`}
        ></div>

        <p className="mx-auto font-p-1 text-white text-center my-7 whitespace-break-spaces text-sm font-bold">
          {desc}
        </p>

        <Link to={link} className="absolute bottom-0 w-full z-30">
          <Button text="Approfondiamo" className="w-full h-10 text-xl text-white border-2 border-opacity"></Button>
        </Link>
      </div>
    </GlassContainer>
  );
};

export const Services = () => {
  return (
    <section className="bg-bg-dark-extra px-sections-mobile md:px-sections py-18 w-full">
      <Heading
        text="Studio, sviluppo e ottimizzo"
        className="text-[2.6rem] sm:text-6xl  text-txt my-3 text-center"
      ></Heading>
      <p className="font-p-1 text-txt text-center">
        con l' utilizzo di tecnologie moderne realizzo prodotti digitali su
        misura per ogni tua esigenza
      </p>
      <div className="overflow-x-auto w-full my-8 p-4">
        <div className="flex justify-center whitespace-nowrap gap-8 w-[1100px]">
          {cards.map((card, index) => (
            <ServiceCard
              label={card.label}
              img={card.img}
              link={card.link}
              desc={card.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
