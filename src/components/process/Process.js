import ProcessTable from "../processTable/ProcessTable";
import "./Process.css";

function Process({ cnj, tribunal, date, movimentacao }) {
  return (
    <>
      <h2 className="processTitle">
        Processo n. {cnj} do {tribunal}
      </h2>
      <p className="processDate">Distribuído em {date}</p>
      <section className="processContainer">
        <ProcessTable />
        <div className="secondColumn">
          <p>Detalhes do processo</p>
          <p>Partes Envolvidas</p>
        </div>
      </section>
    </>
  );
}

export default Process;
