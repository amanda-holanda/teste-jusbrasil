import "./Process.css";

function Process({cnj, tribunal, date, movimentacao}) {
  return (
    <section className="displayContainer">
      <h2>Processo n. {cnj} do {tribunal}</h2>
      <p>Distribuído em {date}</p>
      <div className="movementsContainer">
        <h4>Movimentações:</h4>
        <p>{movimentacao.descricao}</p>
      </div>
    </section>
  );
}

export default Process;
