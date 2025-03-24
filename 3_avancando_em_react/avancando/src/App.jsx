import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {
  const carros = [
    { marca: "VW", modelo: "Gol", ano: 2008, newCar: false },
    { marca: "Fiat", modelo: "Palio", ano: 2010, newCar: false },
    { marca: "Chevrolet", modelo: "Onix", ano: 2025, newCar: true },
  ];

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
      <Container>
        <h2>E este é o conteúdo</h2>
      </Container>
    </>
  );
}

export default App;
