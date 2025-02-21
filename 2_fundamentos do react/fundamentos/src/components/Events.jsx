const Events = () => {
  const handleClick = () => {
    console.log("Clicou no botão");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>
      <br />
      <div>
        <button onClick={() => console.log("clicou")}>Clique aqui também</button>
      </div>
      <br />

    </div>
  );
};

export default Events;