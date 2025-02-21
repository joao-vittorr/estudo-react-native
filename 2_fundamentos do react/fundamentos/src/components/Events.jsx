const Events = () => {
  const handleClick = () => {
    console.log("Clicou no botão");
  };
  const VerificandoOClick = () => {
    if (true) {
      console.log("Clicou no botão de teste");
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
    </div>
  );
};

export default Events;
