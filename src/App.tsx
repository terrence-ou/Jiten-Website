import Footer from "./Footer";
import Header from "./Header";
import StoreFront from "./StoreFront";

function App() {
  return (
    <div className="min-w-dvw h-dvh min-h-[860px] flex justify-center">
      <div className="flex flex-col justify-between w-full max-w-[1440px]">
        <Header />
        <StoreFront />
        <Footer />
      </div>
    </div>
  );
}

export default App;
