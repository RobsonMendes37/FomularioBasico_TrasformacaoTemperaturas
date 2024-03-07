import React from "react";

const MeusDados = ({nome, curso , universidade}) => (
    <div className="respostas">
        <h3 className="respostas__titulo">Seus Dados:</h3>
        <div className="respostas__opcoes">
            <h2 className="resposta__opcao">Nome : {nome}</h2>
            <h2 className="resposta__opcao">Curso: {curso}</h2>
            <h2 className="resposta__opcao">Faculdade : {universidade}</h2>
        </div>
    </div>
);

export default MeusDados;