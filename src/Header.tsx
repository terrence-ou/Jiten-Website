import appIcon from "./assets/icons/app-icon.png";

const Header = () => {
  return (
    <div className="w-full h-18 flex items-center justify-between sticky top-0 bg-white">
      <div className="flex items-center space-x-2">
        <img src={appIcon} alt="App Icon" className="w-12 h-12" />
        <h1 className="text-[1.8rem] font-black">Jiten</h1>
      </div>
      <div className="flex items-center gap-6">
        <p>
          <a href="mailto:terrence@clickvisionstudio.com">Contact</a>
        </p>
        <a href="https://apps.apple.com/us/app/jiten/id6741764874" target="_blank">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
