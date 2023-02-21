import "./Process.css";
import MovementProcess from "../movementProcess/MovementProcess";

function Process({ cnj, tribunal, date, movimentacao }) {
  console.log("parametro", movimentacao);
  return (
    <>
      <h2 className="processTitle">
        Processo n. {cnj} do {tribunal}
      </h2>
      <p className="processDate">Distribuído em {date}</p>
      <section className="processContainer">
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
        <div className="secondColumn">
          <p>Detalhes do processo</p>
          <p>Partes Envolvidas</p>
        </div>
      </section>
    </>
  );
}

export default Process;
