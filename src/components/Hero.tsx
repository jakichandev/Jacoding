import GlassContainer from "./GlassContainer";

interface HeadingInterface {
  text?: string;
  className?: string;
}

export const Heading: React.FC<HeadingInterface> = ({ text, className = "" }) => {
  return <h2 className={`uppercase font-headings-2 ${className}`}>{text}</h2>;
};

const Hero = () => {
  return (
    <section
      className="px-sections-mobile md:px-sections flex flex-col max-h-[880px] box-border py-4"
      id="hero-section"
    >
      <GlassContainer opacity="60" variant="image" className="relative my-2">
        <img className="w-full relative -z-30" src="me.JPG" alt="Jacopo" />

        <div className="text-txt mx-2.5 text-center flex flex-col items-center justify-end absolute z-20 w-full h-full top-0 left-0 pb-8 md:pb-12">
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

      {/*   <div className="m-2.5 flex flex-col items-center justify-center relative z-10">
        <p className="text-txt text-lg text-center font-normal font-p-1">
          creo interfacce moderne, user-friendly e responsive
        </p>
      </div>
      */}
    </section>
  );
};

export default Hero;
