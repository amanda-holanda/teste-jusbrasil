import "./Process.css";
import ProcessMovements from "../processMovements/ProcessMovements";

function Process({ cnj, partes, tribunal, date, movimentacao }) {
  return (
    <section className="processContainer">
      <h2 className="processTitle">
        Processo n. {cnj} do {tribunal}
      </h2>
      <p className="processDate">Distribuído em {date}</p>
      <div className="processData">
        <table className="processTable">
          <thead>
            <tr>
              <th className="processTable-header">Movimentações</th>
            </tr>
          </thead>
          <tbody>
            {movimentacao.map((item) => {
              return (
                <ProcessMovements
                  key={item.id}
                  date={item.date}
                  descricao={item.descricao}
                />
              );
            })}
          </tbody>
        </table>
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
