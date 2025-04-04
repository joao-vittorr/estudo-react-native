import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);
  const n = 2;
  const redTitle = false;

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
        {/*Css inline dinâmico*/}
        <p style={{color: n > 5 ? "green" : "red"}}>Esse Elemento foi estilizado usando css inline dinâmico</p>
        <p style={{color: n < 5 ? "green" : "red"}}>Esse Elemento foi estilizado usando css inline dinâmico</p>
        {/* Classe dinâmica */}
        <h2 className= {redTitle ? "red-title" : "title" }>Este título terá classe dinâmica</h2>
        {/* css modules */}
        <Title/>
        <h2 className="my_title">Testando se o my-title vasa</h2>
      </div>
    </>
  );
}

export default App;
