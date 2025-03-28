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
        {/*Css inline */}
        <p style={{color:"black", backgroundColor:"white", padding: "25px", borderTop: "5px solid red"}}>Esse Elemento foi estilizado usando css inline</p>
      </div>
    </>
  );
}

export default App;
