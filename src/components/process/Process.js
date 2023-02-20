import { useState } from "react";
import ProcessTable from "../processTable/ProcessTable";
import "./Process.css";

function Process({ cnj, tribunal, date, movimentacao}) {

  const [listMovements, setListMovements] = useState([])

  function handleListMovimentacao() {
    const listMovimentacao = movimentacao.map((value) => {
      return (
        <tr key={value.id}>
          <td>{value.date}</td>
          <td>{value.descricao}</td>
        </tr>
      );
    });
    console.log(listMovimentacao)
    setListMovements(listMovimentacao)
  }
  handleListMovimentacao();

  return (
    <>
      <h2 className="processTitle">
        Processo n. {cnj} do {tribunal}
      </h2>
      <p className="processDate">Distribuído em {date}</p>
      <section className="processContainer">      
        <ProcessTable onList={listMovements}/>
        <div className="secondColumn">
          <p>Detalhes do processo</p>
          <p>Partes Envolvidas</p>
        </div>
      </section>
    </>
  );
}

export default Process;
