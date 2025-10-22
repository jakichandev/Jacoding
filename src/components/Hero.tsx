import GlassContainer from "./GlassContainer";
import { Heading } from "./Heading";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="px-sections-mobile md:px-sections py-8 flex flex-col w-full box-border bg-gradient-to-br from-theme-aqua-900 via-theme-gray-900 to-theme-aqua-900"
      id="hero-section"
    >
      <GlassContainer
        opacity="60"
        variant="image"
        className="relative bg-[url('me.png')] bg-cover bg-center md:bg-top flex flex-col items-center justify-end md:min-h-[70vh] min-h-[50vh]"
      >
        <div className="mb-8 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end relative z-20">
          <Heading
            text="I'm Jacopo"
            className="text-5xl md:text-6xl lg:text-7xl font-thin"
          />
          <Heading
            text="frontend"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          />
          <Heading
            text="developer"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          />
          <div className="mt-8">
            <Button
              onClick={() => navigate("/portfolio")}
              className="text-3xl cursor-pointer"
              text="Guarda i miei progetti"
            />
          </div>
        </div>
      </GlassContainer>
    </section>
  );
};

export default Hero;
