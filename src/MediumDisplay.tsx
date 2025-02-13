import { useState, useEffect } from "react";
import { cn } from "./utils";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.png";
import img6 from "./assets/images/6.png";

let timeout: number;

const MediumDisplay = () => {
  const [currGroup, setCurrGroup] = useState<number>(0);
  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCurrGroup((prev) => (prev + 1) % 3);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [currGroup]);

  return (
    <div className="h-[700px] w-full flex flex-col items-center justify-end transition-all duration-300">
      <div className="bottom-0 flex gap-5">
        {currGroup === 0 && (
          <>
            <img src={img1} className="fade-in w-72 h-auto" />
            <img src={img6} className="fade-in w-72 h-auto" />
          </>
        )}
        {currGroup === 1 && (
          <>
            <img src={img2} className="fade-in w-72 h-auto" />
            <img src={img3} className="fade-in w-72 h-auto" />
          </>
        )}
        {currGroup === 2 && (
          <>
            <img src={img4} className="fade-in w-72 h-auto" />
            <img src={img5} className="fade-in w-72 h-auto" />
          </>
        )}
      </div>
      <div className="flex gap-4 mt-5">
        {new Array(3).fill(0).map((_, i) => (
          <div
            onClick={() => setCurrGroup(i)}
            key={`curr-windown-${i}`}
            className={cn(
              "w-4 h-[6px] rounded-full bg-[var(--main-color)] hover:cursor-pointer",
              currGroup === i ? "opacity-100" : "opacity-25"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MediumDisplay;
