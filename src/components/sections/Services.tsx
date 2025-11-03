import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import type { Service } from "../../types/Service/Service";
import { services } from "../../data/services";
import { useRef, useState, useEffect } from "react";

export const ServiceCard = ({ label, img, desc, link, index }: Service) => {
  return (
    <GlassContainer
      className="relative box-border p-2.5 shrink-0 snap-center w-[22rem] border-2 border-opacity h-full"
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
          <Button
            text="Maggiori dettagli"
            className="w-full h-10 text-xl text-white border-2 border-opacity"
          ></Button>
        </Link>
      </div>
    </GlassContainer>
  );
};

export const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / 380);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-theme-gray-950 px-sections-mobile md:px-sections py-22 w-full">
      <Heading
        text="Cosa offro"
        className="text-[2.6rem] sm:text-6xl  text-txt my-3 text-center m-0"
      ></Heading>
      <p className="text-xl font-p-1 text-txt text-center font-medium italic">
        con le migliori tecnologie sul mercato
      </p>

      <div className="relative my-8">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto w-full p-4 scroll-smooth snap-x snap-mandatory"
        >
          <div className="mx-auto flex justify-center whitespace-nowrap gap-8 w-[1100px]">
            {services.map((card, index) => (
              <ServiceCard
                key={index}
                label={card.label}
                img={card.img}
                link={card.link}
                desc={card.desc}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Indicatori di scorrimento (pallini) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-theme-aqua-500 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Vai al servizio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
