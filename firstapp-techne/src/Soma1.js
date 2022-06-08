import React, {useState} from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const somaMais1 = () => {
    setContador(contador+1);
  }

  return(
    <>
      <h1>{contador}</h1>
      <button onClick={somaMais1}>Somar mais 1</button>
    </>
  );
}

export default App;

