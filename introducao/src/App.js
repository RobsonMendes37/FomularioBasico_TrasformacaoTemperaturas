import React, { useState } from "react";
import MeusDados01 from "./components/atividade00/MeusDados01";
import MeusDados02 from "./components/atividade00/MeusDados02";
import { CelsiusParaFahrenheit, FahrenheitParaCelsius, Kelvin } from './components/atividade00/Temperatura03';
import Img from "./assets/vertical_colorido.png";
import "./App.css"; 

function App() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [universidade, setUniversidade] = useState("");

  const[celsius,setCelsius] = useState("");
  const [fahrenheit,setFahrenheit] = useState("");
  const [kelvin,setKelvin] = useState ("");

  return (
    <div>
      <div className='cabecalho'>
          <img className="imagem" src={Img} alt="logo ufc" width="200" height="150" />
      </div>
      <MeusDados01 />
      <div className="formulario">
        <h3 className="formulario__titulo">Escreva suas Informações:</h3>
        <input  className='formulario__opcao' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input  className='formulario__opcao' type="text" value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Curso" />
        <input  className='formulario__opcao' type="text" value={universidade} onChange={(e) => setUniversidade(e.target.value)} placeholder="Universidade" />
      </div>
      <MeusDados02 nome={nome} curso={curso} universidade={universidade} />

      <div className="temperatura">
        <div className="temperatura__formulario">
          <h3 className="temperatura__titulo">Controle de Temperatura absoluto:</h3>
          
          <input  className='temperatura__opcao' type="value" value={celsius} onChange={(h) => setCelsius(h.target.value)} placeholder="Celsius" />
          <input  className='temperatura__opcao' type="value" value={fahrenheit} onChange={(h) => setFahrenheit(h.target.value)} placeholder="Fahrenheit" />
          <input  className='temperatura__opcao' type="value" value={kelvin} onChange={(h) => setKelvin(h.target.value)} placeholder="Kelvin" />
        </div>

        <div className="conteiner__visualizar">
          <div className="temperatura__resposta__opcao">
            <h2 className="temperatura__resposta__opcao__titulo"> Celsius Para Fahrenheit </h2>
            <h3 className="resposta__opcao__conteudo">Celsius = {celsius} </h3>
            <h3 className="resposta__opcao__conteudo">Fahrenheit = {CelsiusParaFahrenheit(celsius)}</h3>
          </div>  

          <div className="temperatura__resposta__opcao">
            <h2 className="temperatura__resposta__opcao__titulo">Fahrenheit Para Celsius</h2>
            <h3 className="resposta__opcao__conteudo">Fahrenheit = {fahrenheit} </h3>
            <h3 className="resposta__opcao__conteudo">Celsius = {FahrenheitParaCelsius(fahrenheit)}</h3>
          </div>  

          <div className="temperatura__resposta__opcao">
            <h2 className="temperatura__resposta__opcao__titulo">Kelvin para Celsius e Fahrenheit</h2>
            <h3 className="resposta__opcao__conteudo">Kelvin= {kelvin} </h3>
            <h3 className="resposta__opcao__conteudo">Celsius = {Kelvin(kelvin)[0]}</h3>
            <h3 className="resposta__opcao__conteudo">Fahrenheit = {Kelvin(kelvin)[1]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
