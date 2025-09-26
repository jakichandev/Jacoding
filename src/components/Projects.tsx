import GlassContainer from "./GlassContainer";
import { Heading } from "./Hero";

export const Projects = () => {
  return (
    <section className="px-sections-mobile md:px-sections py-22 bg-bg-dark-extra">
      <Heading
        text="I miei progetti"
        className="text-5xl text-txt text-center "
      />
      <div className="grid grid-cols-2 md:grid-cols-3 my-12">
        <GlassContainer className="text-center p-2">
          <div className="relative z-20">
            <Heading
              text="Progetto"
              className="text-3xl text-white font-bold"
            />

            <p className="text-white font-p-1 text-sm my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem sed necessitatibus earum sit voluptatum,
              corporis itaque inventore numquam culpa maiores ab impedit ullam,
              a et ea quos, placeat veniam!
            </p>
            <div className="flex items-center gap-1.5 mt-4">
                <img className="w-6" src="/javascript.svg" alt="" />
                <img className="w-6" src="/tailwind.svg" alt="" />
                <img className="w-6" src="/nodejs.svg" alt="" />
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
};
