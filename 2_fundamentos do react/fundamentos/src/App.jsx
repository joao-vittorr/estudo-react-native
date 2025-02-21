import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First Component</h1>
      <FirstComponent />
      <hr />
      <h1>Template Expressions</h1>
      <TemplateExpressions />
      <Events />
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Imagem de wallpaper da logo do dell g15" />
      </div>
      <br />
      {/* Imagem em src/assets */}
      <div>
        <img src="" alt="" />
      </div>
    </>
  );
}

export default App;
