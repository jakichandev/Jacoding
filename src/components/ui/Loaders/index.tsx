import { Heading } from "../../ui/Heading";

export const FormLoader = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Spinner animato */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-theme-aqua-500/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-theme-aqua-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-theme-aqua-400 rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-4 border-4 border-transparent border-t-theme-aqua-300 rounded-full animate-spin animation-delay-300"></div>
      </div>

      {/* Testo animato */}
      <div className="flex flex-col items-center gap-2">
        <Heading
          text="Invio in corso"
          className="text-3xl text-white animate-pulse"
        />
        <p className="text-white/70 font-p-1 text-lg">
          Attendi qualche istante...
        </p>
      </div>

      {/* Dots animati */}
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-theme-aqua-500 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-theme-aqua-400 rounded-full animate-bounce animation-delay-150"></span>
        <span className="w-3 h-3 bg-theme-aqua-300 rounded-full animate-bounce animation-delay-300"></span>
      </div>
    </div>
  );
};
