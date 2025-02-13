import { useState } from "react";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";

const AppDisplay = () => {
  const [currSize, setCurrSize] = useState<"small" | "medium" | "large">("medium");
  console.log(currSize);
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <button onClick={() => setCurrSize("small")}>Small</button>
        <button onClick={() => setCurrSize("medium")}>Medium</button>
        <button onClick={() => setCurrSize("large")}>Large</button>
      </div>
      <div className="flex gap-4 justify-center">
        <img src={img3} className="w-80 h-auto" />
        <img src={img4} className="w-80 h-auto" />
      </div>
    </div>
  );
};

export default AppDisplay;
