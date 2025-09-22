import Button from "./Button";
import GlassContainer from "./GlassContainer";

interface HeadingInterface {
  text: string;
  sizes: {
    sm: string;
    lg: string;
  };
}

const Heading = ({ text, sizes }: HeadingInterface) => {
  return (
    <h2 className={`uppercase font-medium ${sizes.sm} sm:${sizes.lg}`}>
      {text}
    </h2>
  );
};

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row max-h-[880px]" id="hero-section">
      <GlassContainer opacity={"60"} className={`my-2`}>
        <img className="w-full relative -z-30" src="me.JPG"></img>

        <div className="text-txt mx-2.5 text-center flex flex-col items-center absolute z-20 w-full h-full top-[50%] left-0">
          <Heading
            text={"I'm Jacopo"}
            sizes={{ sm: "text-6xl", lg: "text-8xl" }}
          />
          <Heading
            text={"frontend"}
            sizes={{ sm: "text-6xl", lg: "text-8xl" }}
          />
          <Heading
            text={"developer"}
            sizes={{ sm: "text-6xl", lg: "text-8xl" }}
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
