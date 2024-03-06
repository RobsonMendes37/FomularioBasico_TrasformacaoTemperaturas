import React,{useState} from "react";


import MeusDados01 from "./components/atividade00/MeusDados01";

import MeusDados02 from "./components/atividade00/MeusDados02";

function App() {

  const [nome,setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [universidade, setUniversidade] = useState("");

  return (

    <div>
      <MeusDados01/>

      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Curso" />
      <input type="text" value={universidade} onChange={(e) => setUniversidade(e.target.value)} placeholder="Universidade" />
      <MeusDados02 nome={nome} curso={curso} universidade={universidade} />

      

    </div>

  );
}

export default App;
