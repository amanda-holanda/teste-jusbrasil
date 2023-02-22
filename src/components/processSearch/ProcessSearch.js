import "./ProcessSearch.css";
import { useState } from "react";

function ProcessSearch(props) {
  const [processNumber, setProcessNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(processNumber);
  };

  return (
    <section className="searchContainer">
      <h1 className="searchTitle">Consulta Processual</h1>
      <p className="searchParagraph">
        Consultar processos por número em um clique
      </p>
      <form onSubmit={handleSubmit} className="searchForm">
        <label className="labelSearch" htmlFor="numeroProcesso">
          <input
            className="inputSearch"
            type="text"
            name="numeroProcesso"
            placeholder="1234567-88.2020.8.10.1234"
            onChange={(e) => setProcessNumber(e.target.value)}
            value={processNumber}
          />
        </label>
        <button className="searchBtn" type="submit">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default ProcessSearch;
