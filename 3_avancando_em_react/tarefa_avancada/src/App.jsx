import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetails from "./components/UserDetails";


function App() {
  const pessoas = [
    { id: 1, nome: "João", idade: 20 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "José", idade: 40 },
  ];

  return (
    <>
      <h1>Desafio 4</h1>
      <UserDetails pessoas={pessoas} />
    </>
  );
}

export default App;
