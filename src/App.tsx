import Header from "./Header";
import StoreFront from "./StoreFront";

function App() {
  return (
    <div className="min-w-dvw min-h-dvh flex justify-center">
      <div className="w-full max-w-[1600px]">
        <Header />
        <StoreFront />
      </div>
    </div>
  );
}

export default App;
