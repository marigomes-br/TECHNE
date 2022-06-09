import React, { useEffect, useState } from "react";
import axios from "axios";
import ListaAvenidas from "./ListaAvenidas";

const Pagina = () => {
  const [avenidas, setAvenidas] = useState([]);

  useEffect(() => {
    axios
      .get("https://viacep.com.br/ws/SP/Sao%20Paulo/Presidente/json/")
      .then((response) => {
        setAvenidas(response.data);
      });
  }, []);

  return (
    <>
      <h1>Logradouros 'Presidente' em SP</h1>
      <hr></hr>
      <ListaAvenidas avenidas={avenidas} />
    </>
  );
};

export default Pagina;
