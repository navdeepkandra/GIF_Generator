import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg font-bold text-4xl w-11/12 mt-[40px] px-10 py-2 text-center">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
