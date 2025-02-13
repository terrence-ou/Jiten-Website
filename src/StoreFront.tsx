import AppDisplay from "./AppDisplay";
import downloadIcon from "./assets/icons/download-icon.svg";
import appIcon from "./assets/icons/app-icon.png";

const StoreFront = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 justify-center items-end">
      <div className="flex flex-col justify-center items-center pb-12">
        <img src={appIcon} className="w-28 h-28" />
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col items-center">
            <h1 className="text-[3.2rem] leading-tight font-black">Jiten</h1>
            <p className="text-xl">(jee-ten | じてん)</p>
          </div>
        </div>
        <p className="text-[1.2rem] my-7 px-10 leading-snug">
          <span className="font-bold">An intelligent English dictionary </span>
          that delivers precise word definitions, example sentences, and suggests related
          terms based on your input. Jten helps you understand words better and expand
          your vocabulary faster.
        </p>
        <div className="flex flex-col items-center gap-1">
          <a href="https://apps.apple.com/us/app/jiten/id6741764874" target="_blank">
            <img src={downloadIcon} className="h-16" />
          </a>
          <p className="text-xs mt-2">*Available on the U.S. and Canada App Stores</p>
        </div>
      </div>
      <AppDisplay />
    </div>
  );
};

export default StoreFront;
