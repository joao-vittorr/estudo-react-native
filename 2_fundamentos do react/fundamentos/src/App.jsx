import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First Component</h1>
      <FirstComponent />
    </>
  );
}

export default App;
