import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First Component</h1>
      <FirstComponent />
      <hr />
      <h1>Template Expressions</h1>
      <TemplateExpressions />
    </>
  );
}

export default App;
