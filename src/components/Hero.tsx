import Button from "./Button";

interface HeadingInterface {
  text: string;
  sizes: {
    sm:string;
    lg: string;
  }
}

const Heading = ({text, sizes}:HeadingInterface) => {
  return (
    <h2 className={`uppercase font-medium text-${sizes.sm} sm:text-${sizes.lg}`}>{text}</h2>
  )
}

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="relative mx-sections my-5 rounded-lg border-1 border-opacity overflow-hidden">
        <div className="">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-bg-dark-extra via-txt-2 from-30% to-60% to-bg-dark-extra -z-10 blur-2xl opacity-80"></div>
          <div className="text-txt rounded-lg p-5 mx-2.5 text-center flex flex-col items-center">
           <Heading text={'I\'m Jacopo'} sizes={{sm: "7xl", lg:"8xl"}}/>
           <Heading text={'frontend'} sizes={{sm: "7xl", lg:"8xl"}}/>
           <Heading text={'developer'} sizes={{sm: "7xl", lg:"8xl"}}/>
          </div>
        </div>

        <div className="p-5 m-2.5 flex flex-col items-center justify-center">
          <p className="text-txt text-2xl text-center font-bold font-code">
            scrivo siti web, applicazioni e progetto interfacce innovative
          </p>
        </div>

        <div className="p-5 m-2.5 flex flex-col justify-center">
          <Button
            text="Iniziamo a sviluppare"
            dimensions={{ width: "32", height: "10" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
