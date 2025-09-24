import GlassContainer from "./GlassContainer";
import { Heading } from "./Hero";
import Button from "./Button";
import { Link } from "react-router";

interface CardData {
  label: string;
  img: string;
  desc?: string;
  link: string;
  index?: number;
}
const cards: CardData[] = [
  {
    label: "Siti web",
    img: "./img.png",
    link: "/services/websites",
    desc: "Siti web sviluppati con le migliori tecnologie presenti sul mercato",
  },
  {
    label: "Web Applications",
    img: "./img.png",
    link: "/sevices/webapplications",
    desc: "Applicazioni strutturate per funzionare su un browser web come gestionali, dashboards, social network",
  },
  {
    label: "Templates",
    img: "./img.png",
    link: "/services/templates",
    desc: "Template pronti e facilmente integrabili per sviluppatori",
  },
];

export const ServiceCard = ({ label, img, desc, link, index }: CardData) => {
  return (
    <GlassContainer
      className="p-7 w-[100vw] [&>*]:relative [&>*]:z-20"
      key={index}
    >
      <div className="absolute">
        <Heading className="text-3xl text-txt" text={label}></Heading>
        <p className="font-p-1">{desc}</p>
        <img src={img} />
        <Link to={link}>
          <Button text="Approfondiamo" className="w-full h-10"></Button>
        </Link>
      </div>
    </GlassContainer>
  );
};

export const Services = () => {
  return (
    <section className="bg-bg-dark-extra py-20 overflow-x-hidden">
      <div className="mx-sections text-center box-border">
        <Heading
          text="Studio, sviluppo e ottimizzo"
          className="text-4xl sm:text-5xl text-txt my-8"
        ></Heading>
        <div className="w-[300vw] overflow-x-scroll">
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
