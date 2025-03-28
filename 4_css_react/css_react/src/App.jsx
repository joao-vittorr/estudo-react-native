import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/*Css Global */}
        <h1>React CSS</h1>
        {/*Css de componente */}
        <Mycomponent />
        <p>Esse paragrado é do App.js</p>
      </div>
    </>
  );
}

export default App;
