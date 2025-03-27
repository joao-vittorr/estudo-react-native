import React from "react";

const UserDetails = ({ pessoas }) => {
  return (
    <>
      <h2>Detalhes de pessoas</h2>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            <p>Nome: {pessoa.nome}</p>
            <p>Idade: {pessoa.idade}</p>
            <p>
              Habilitação:{" "}
              {pessoa.idade >= 18
                ? "Pode ter habilitação"
                : "Não pode ter habilitação"}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserDetails;
