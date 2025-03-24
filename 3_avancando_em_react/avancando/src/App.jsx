import "./App.css";
import { useState } from "react";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const carros = [
    { marca: "VW", modelo: "Gol", ano: 2008, newCar: false },
    { marca: "Fiat", modelo: "Palio", ano: 2010, newCar: false },
    { marca: "Chevrolet", modelo: "Onix", ano: 2025, newCar: true },
  ];

  function showMessage() {
    alert("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
        <CarDetails marca="VW" modelo="Gol" ano={2008} newCar={false}> </CarDetails>
        {/* Reaproveitando*/}
        <CarDetails marca="Fiat" modelo="Palio" ano={2010} newCar={false}> </CarDetails>
        <CarDetails marca="Chevrolet" modelo="Onix" ano={2025} newCar={true}> </CarDetails>
        <br /><hr />
        <h2>Reaproveitando com map</h2>
        {/* Reaproveitando com map */}
        {carros.map((carro) => (
          <CarDetails marca={carro.marca} modelo={carro.modelo} ano={carro.ano} newCar={carro.newCar}> </CarDetails>
        ))}
      </div>
      <br /><hr />
      {/* Fragment */}
      <Fragment />
      {/* Children */}
      <Container myValue="Teste">
        <h2>E este é o conteúdo</h2>
      </Container>
      {/* Executando fução na props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </>
  );
}

export default App;
