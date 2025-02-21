const Events = () => {
  const handleClick = () => {
    console.log("Clicou no botão");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>
    </div>
  );
};

export default Events;