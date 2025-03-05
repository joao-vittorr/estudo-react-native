import { useState } from "react";
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <>
      <h1>Conhecimentos avançando em React</h1>
      <div>
        <ManageData> </ManageData>
        <ListRender> </ListRender>
        <CondicionalRender> </CondicionalRender>
        {/* props */}
        <ShowUserName name="João Vitor Alexandre Ribeiro "> </ShowUserName>
        {/* destructuring */}
        <CarDetails marca="VW" modelo="Gol" ano={2008}> </CarDetails>
      </div>
    </>
  );
}

export default App;
