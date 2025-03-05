import React from "react";

const CarDetails = (props) => {
  return (
    <div>
      <h2>
        Detalhes do carro: <br />
        <ul>
            <li>
                <strong>Marca:</strong> {props.marca}
            </li>
            <li>
                <strong>Modelo:</strong> {props.modelo}
            </li>
            <li>
                <strong>Ano:</strong> {props.ano}
            </li>
        </ul>
      </h2>
    </div>
  );
};

export default CarDetails;
