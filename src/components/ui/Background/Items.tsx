import back from "../../../assets/svg/back.svg";

export const BackgroundItem1 = () => {
  return (
    <div
      id="bit-image"
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <img
        src={back}
        alt="Decorative background illustration"
        className="object-cover absolute top-0 w-full h-full left-0 opacity-10"
      />
    </div>
  );
};
