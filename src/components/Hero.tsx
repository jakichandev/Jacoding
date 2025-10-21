import GlassContainer from "./GlassContainer";
import { Heading } from "./Heading";

const Hero = () => {
  return (
    <section
      className="px-sections-mobile md:px-sections flex flex-col w-full max-h-[80vh] box-border py-12 bg-[url('hero_image_3.jpg')] bg-cover bg-center"
      id="hero-section"
    >
      <GlassContainer opacity="40" variant="image" className="relative my-2">
        <img className="w-full relative -z-30 opacity-50" src="me.JPG" alt="Jacopo" />

        <div className="scale-150 md:scale-100 pb-22 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end absolute z-20 w-full h-full top-0 left-0 md:pb-12">
          <Heading
            text="I'm Jacopo"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-thin"
          />
          <Heading
            text="frontend"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium"
          />
          <Heading
            text="developer"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium"
          />
        </div>
      </GlassContainer>
    </section>
  );
};

export default Hero;
