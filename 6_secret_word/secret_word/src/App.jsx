import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StartScreen/>
    </>
  );
}

export default App;
