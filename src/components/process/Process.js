import { ProcessMovementList } from "../processMovementList/ProcessMovementList";
import "./Process.css";

function Process({ cnj, partes, tribunal, date, movimentacao }) {
  return (
    <section className="processContainer">
      <h2 className="processTitle">
        Processo n. {cnj} do {tribunal}
      </h2>
      <p className="processDate">Distribuído em {date}</p>
      <div className="processData">
        <ProcessMovementList movements={movimentacao} />
        <section className="processDetails">
          <ul>
            <li className="listParts headline">Partes Envolvidas</li>
            <li className="listParts name">{partes.autor}</li>
            <li className="listParts caption">Parte envolvida - autor</li>
            <li className="listParts name">{partes.reu}</li>
            <li className="listParts caption">Parte envolvida - réu</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Process;
