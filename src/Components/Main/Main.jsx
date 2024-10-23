import React from "react";
import { useState } from "react";
import "./MainStyle.scss";

export default function Main() {
    //useState
    //[nome da variável, função atualizadora]
    const [lamp, setLamp] = useState(false);
    const lampSwitch = () => {
    setLamp(!lamp);
    }

    return (
        <main>
            <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
            <div>
                <img src={lamp ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true" : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"} alt="Lâmpada" />
            </div>
            
            <button onClick={lampSwitch}>Clique Aqui</button>
        </main>
    );
}