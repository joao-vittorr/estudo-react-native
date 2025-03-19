import React from "react";

const CarDetails = ({marca, modelo, ano, newCar}) => {
  return (
    <div>
      <h2>
        Detalhes do carro: <br />
        <ul>
            <li>
                <strong>Marca:</strong> {marca}
            </li>
            <li>
                <strong>Modelo:</strong> {modelo}
            </li>
            <li>
                <strong>Ano:</strong> {ano}
            </li>
        </ul>
        {newCar ? "Novo" : "Usado"}
      </h2>
    </div>
  );
};

export default CarDetails;
