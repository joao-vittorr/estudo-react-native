import React from "react";

const CarDetails = ({marca, modelo, ano}) => {
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
      </h2>
    </div>
  );
};

export default CarDetails;
