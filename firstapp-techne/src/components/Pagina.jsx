import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagina = () => {
  //   const numero = 5;
  //   const texto = "meu numero é:";

  //  const [texto, setTexto] = useState("");

  //   useEffect(() => {
  //     if (texto.length > 4) console.log(texto);
  //   }, [texto]);

  useEffect(() => {
    axios.get("https://viacep.com.br/ws/SP/Sao%20Paulo/Presidente/json/");
  }, []);

  return (
    <>
      <h1>Minha Pagina</h1>
      {/* <input value={texto} onChange={(event) => setTexto(event.target.value)} /> */}
      {/* {`${texto} ${numero}`} */}
    </>
  );
};

export default Pagina;
