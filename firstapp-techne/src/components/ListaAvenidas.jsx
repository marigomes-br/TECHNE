import React from "react";

const ListaAvenidas = ({ avenidas }) => {
  return (
    <>
      {avenidas.map((avs, i) => (
        <h2 key={i}>{avs.logradouro}</h2>
      ))}
    </>
  );
};

export default ListaAvenidas;
