import bitSvg from "../../../assets/svg/01.svg";

export const BackgroundItem1 = () => {
  return (
    <div
      id="bit-image"
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <img
        src={bitSvg}
        alt="Decorative 0 and 1 illustration"
        className="object-cover relative w-full h-full opacity-40 blur-[1.5px]"
      />
    </div>
  );
};
