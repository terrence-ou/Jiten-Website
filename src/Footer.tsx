const Footer = () => {
  return (
    <div className="w-full h-10">
      <div className="flex items-center justify-center text-base gap-30">
        <p>Terrence Ou @ {new Date().getFullYear()}</p>
        <div className="flex gap-4 ml-4">
          <p className="w-20 hover:underline hover:font-bold text-center hover:cursor-pointer">
            <a href="mailto:terrence@clickvisionstudio.com">Contact</a>
          </p>
          <p>|</p>
          <p className="w-30 hover:underline hover:font-bold text-center hover:cursor-pointer">
            <a
              href="https://www.privacypolicies.com/live/a1abec97-2ed3-4693-95ed-d62896fa6882"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
          <p>|</p>
          <p className="w-20 hover:underline hover:font-bold text-center hover:cursor-pointer">
            <a href="https://github.com/terrence-ou" target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
