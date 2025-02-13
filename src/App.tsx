import Header from "./Header";
import StoreFront from "./StoreFront";

function App() {
  return (
    <div className="min-w-dvw min-h-dvh flex justify-center">
      <div className="relative w-full max-w-[1440px]">
        <Header />
        <StoreFront />
      </div>
    </div>
  );
}

export default App;
