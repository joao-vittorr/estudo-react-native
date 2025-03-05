import { useState } from "react";
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";

function App() {
  return (
    <>
      <h1>Conhecimentos avançando em React</h1>
      <div>
        <ManageData> </ManageData>
        <ListRender> </ListRender>
        <CondicionalRender> </CondicionalRender>
      </div>
    </>
  );
}

export default App;
