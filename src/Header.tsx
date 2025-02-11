import appIcon from "./assets/icons/app-icon.png";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src={appIcon} alt="App Icon" className="w-10 h-10" />
        <h1 className="text-[1.6rem] font-black">Jiten</h1>
      </div>
      <div>
        <a>Support</a>
      </div>
    </div>
  );
};

export default Header;
