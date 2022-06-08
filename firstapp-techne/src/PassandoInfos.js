import React from "react";
import Header from "./components/Header";

const App = () => {
    const informacoesSistema = {
        nomeAplicativo: "Meu APP",
    };

    return (
        <>
            <Header info={informacoesSistema}/>
            <h1>Minha pagina</h1>
        </>
    );
};

export default App;