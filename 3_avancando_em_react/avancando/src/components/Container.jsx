import React from "react";

function Container({ children, myValue }) {
  return <>
    <h2>Esté é o container principal</h2>
    {children}
    <p>Este é o valor do conteúdo: {myValue}</p>
  </>;
}

export default Container;
