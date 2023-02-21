import "./Process.css";
import MovementProcess from "../movementProcess/MovementProcess";

function Process({ cnj, partes, tribunal, date, movimentacao }) {
  console.log("parametro", movimentacao);
  return (
    <section>
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
                <MovementProcess
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
            <li>Partes Envolvidas</li>
            <li>{partes.autor}</li>            
            <li>autor</li>
            <li>{partes.reu}</li>
            <li>réu</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Process;
