import appIcon from "./assets/icons/app-icon.png";

const Header = () => {
  return (
    <div className="w-full h-14 flex items-center justify-between top-0 bg-white">
      <div className="flex items-center space-x-2">
        <img src={appIcon} alt="App Icon" className="w-12 h-12" />
        <h1 className="text-[1.8rem] font-black">Jiten</h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        <p className="w-20 hover:underline hover:font-bold text-center">
          <a href="mailto:terrence@clickvisionstudio.com">Support</a>
        </p>
        <p className="w-20 hover:underline hover:font-bold text-center">
          <a href="https://apps.apple.com/us/app/jiten/id6741764874" target="_blank">
            Download
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
