import React from "react";
import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variavel</button>
      </div>
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(15)}>Mudar Estado</button>
      </div>
    </div>
  );
};

export default ManageData;
