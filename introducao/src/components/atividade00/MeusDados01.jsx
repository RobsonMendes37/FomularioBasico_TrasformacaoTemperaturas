import React , {Component}from "react";
const MeusDadosV1 = () => {
    return (
        <div>
        <h1>Nomes: Robson e Bruno</h1>
        <h1>Curso: Engenharia de Software</h1>
        <h1>Faculdade: Universidade Federal do Ceará</h1>
        </div>
    )
  }

const MeusDadosV2 = () => {
    return (
        <div className='titulo'>
            <h1 className="titulo_inicial">Nomes: Robson e Bruno</h1>
            <h1 className="titulo_inicial">Curso: Engenharia de Software</h1>
            <h1 className="titulo_inicial">Faculdade: Universidade Federal do Ceará</h1>
        </div>
    )
}

const MeusDadosV3 = () => (
    <div>
        <h1>Nomes: Robson e Bruno</h1>
        <h1>Curso: Engenharia de Software</h1>
        <h1>Faculdade: Universidade Federal do Ceará</h1>
    </div>
  );

class MeusDadosV4 extends Component {
    render() {
      return (
        <div>
          <h1>Nomes: Robson e Bruno</h1>
          <h1>Curso: Engenharia de Software</h1>
          <h1>Faculdade: Universidade Federal do Ceará</h1>
        </div>
      );
    }
  }
  
 export default MeusDadosV2