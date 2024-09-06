import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-teal-300 to-blue-400">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center text-white max-w-xs">
        <h1 className="text-4xl mb-2">Seoul</h1>
        <h2 className="text-6xl mb-4">28°C</h2>
        <p className="text-xl mb-6">Sunny</p>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">Humidity</h3>
            <p className="text-2xl">45%</p>
          </div>
          <div>
            <h3 className="text-lg">Wind</h3>
            <p className="text-2xl">12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
