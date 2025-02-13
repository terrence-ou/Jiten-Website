// import img1 from "./assets/images/1.png";
// import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import downloadIcon from "./assets/icons/download-icon.svg";

const StoreFront = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 my-6 justify-center items-end">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[3.2rem] leading-tight font-black">Jiten</h1>
          <p className="text-xl">(jee-ten | じてん)</p>
        </div>
        <p className="text-[1.2rem] my-7">
          An intelligent English dictionary that delivers precise word definitions,
          example sentences, and suggests related terms based on your input.
        </p>
        <div className="flex flex-col items-center gap-1">
          <img src={downloadIcon} className="h-16" />
          <p className="text-sm">Available on the U.S. and Canada App Stores</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src={img3} className="w-80 h-auto" />
        <img src={img4} className="w-80 h-auto" />
      </div>
    </div>
  );
};

export default StoreFront;
