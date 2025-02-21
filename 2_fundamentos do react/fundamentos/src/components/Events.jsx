const Events = () => {
  const handleClick = () => {
    console.log("Clicou no botão");
  };

  const VerificandoOClick = () => {
    if (true) {
      console.log("Clicou no botão de teste");
    }
  };

  const renderSomething = (x) => {
    if (x) {
      return <p>Renderizando algo</p>;
    } else {
      return <p>Nada para renderizar</p>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>
      <br />
      <div>
        <button onClick={() => console.log("clicou")}>
          Clique aqui também
        </button>
      </div>
      <br />
      <div>
        <button onClick={VerificandoOClick}>Teste esse click</button>
      </div>
        <br />
        <div>{renderSomething(true)}</div>
        <div>{renderSomething(false)}</div>
    </div>
  );
};

export default Events;
