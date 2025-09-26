import Button from "./Button";
import GlassContainer from "./GlassContainer";

interface HeadingInterface {
  text: string;
  className: string;
}

export const Heading = ({ text, className }: HeadingInterface) => {
  return (
    <h2 className={`uppercase font-headings-2 ${className}`}>
      {text}
    </h2>
  );
};

const Hero = () => {
  return (
    <section
      className="px-sections-mobile md:px-sections flex flex-col max-h-[880px] box-border py-4"
      id="hero-section"
    >
      <GlassContainer opacity={"60"} className={`my-2`}>
        <img className="w-full relative -z-30" src="me.JPG"></img>

        <div className="text-txt mx-2.5 text-center flex flex-col items-center absolute z-20 w-full h-full top-[50%] left-0">
          <Heading text={"I'm Jacopo"} className={"text-4xl sm:text-7xl font-thin"} />
          <Heading text={"frontend"} className={"text-5xl sm:text-7xl font-medium"} />
          <Heading text={"developer"} className={"text-5xl sm:text-7xl font-medium"} />
        </div>
      </GlassContainer>

    {/*   <div className="m-2.5 flex flex-col items-center justify-center relative z-10">
        <p className="text-txt text-lg text-center font-normal font-p-1">
          creo interfacce moderne, user-friendly e responsive
        </p>
      </div>
      */}

      <div className="flex flex-col justify-center relative z-10 my-6">
        <Button
          text="Iniziamo a sviluppare"
          className={"sm:w-3/4 h-18 text-3xl sm:mx-auto box-border border-2 border-opacity text-txt"}
        />
      </div> 
    </section>
  );
};

export default Hero;
