import Button from "./Button";
import GlassContainer from "./GlassContainer";

interface HeadingInterface {
  text: string;
  className: string;
}

export const Heading = ({ text, className }: HeadingInterface) => {
  return (
    <h2 className={`uppercase font-semibold font-headings-2 ${className}`}>
      {text}
    </h2>
  );
};

const Hero = () => {
  return (
    <section className="px-sections-mobile sm:px-sections flex flex-col md:flex-row max-h-[880px] box-border" id="hero-section">
      <GlassContainer opacity={"60"} className={`my-2`}>
        <img className="w-full relative -z-30" src="me.JPG"></img>

        <div className="text-txt mx-2.5 text-center flex flex-col items-center absolute z-20 w-full h-full top-[50%] left-0">
          <Heading
            text={"I'm Jacopo"}
            className={"text-6xl sm:text-7xl"}
          />
          <Heading
            text={"frontend"}
             className={"text-6xl sm:text-7xl"}
          />
          <Heading
            text={"developer"}
             className={"text-6xl sm:text-7xl"}
          />
        </div>
      </GlassContainer>

      <GlassContainer className={"my-2"}>
        <div className="p-5 m-2.5 flex flex-col items-center justify-center relative z-10">
          <p className="text-txt text-lg text-center font-bold font-p-1">
            scrivo siti web, applicazioni e progetto interfacce innovative
          </p>
        </div>

        <div className="p-5 m-2.5 flex flex-col justify-center relative z-10">
          <Button
            text="Iniziamo a sviluppare"
            dimensions={{ width: "32", height: "26" }}
          />
        </div>
      </GlassContainer>
    </section>
  );
};

export default Hero;
