import { useState } from "react";
import { cn } from "./utils";
import MediumDisplay from "./MediumDisplay";

const AppDisplay = () => {
  const [currSize, setCurrSize] = useState<"small" | "medium" | "large">("medium");
  const leftPos = () => {
    switch (currSize) {
      case "medium":
        return "left-29";
      case "large":
        return "left-58";
      default:
        return "left-0";
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex gap-5 justify-center">
        <div
          className={cn(
            "absolute -bottom-1 h-[0.2rem] w-24 bg-[#81B29A] transition-all duration-100",
            leftPos()
          )}
        ></div>
        <SizeButton
          onClick={() => setCurrSize("small")}
          text={'4.7" Display'}
          active={currSize === "small"}
        />
        <SizeButton
          onClick={() => setCurrSize("medium")}
          text={'6.3" Display'}
          active={currSize === "medium"}
        />
        <SizeButton
          onClick={() => setCurrSize("large")}
          text={'6.9" Display'}
          active={currSize === "large"}
        />
      </div>
      <MediumDisplay />
    </div>
  );
};

type SizeButtonProps = {
  onClick: () => void;
  text: string;
  active: boolean;
};

const SizeButton = ({ onClick, text, active }: SizeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-24 text-sm hover:cursor-pointer focus-visible:outline-none",
        active ? "font-extrabold" : "font-normal"
      )}
    >
      {text}
    </button>
  );
};

export default AppDisplay;
