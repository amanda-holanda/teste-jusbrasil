import "./SearchProcess.css";
import { useState } from "react";

function SearchProcess(props) {
  const [tribunalOrigin, setTribunalOrigin] = useState("");
  const [processNumber, setProcessNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(tribunalOrigin, processNumber);
  };

  return (
    <section className="searchContainer">
      <h1 className="searchTitle">Consulta Processual</h1>
      <p className="searchParagraph">
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
      <form onSubmit={handleSubmit} className="searchForm">
        <label className="labelSearch" htmlFor="tribunal">
          <select className="selectionSearch"
            name="tribunal"
            onChange={(e) => setTribunalOrigin(e.target.value)}
          >
            <option value="">Selecione o tribunal</option>
            <option value="TJSP">TJSP</option>
            <option value="TJCE">TJCE</option>
            <option value="TJPI">TJPI</option>
          </select>
        </label>
        <label className="labelSearch" htmlFor="numeroProcesso">
          <input className="selectionSearch"
            type="text"
            name="numeroProcesso"
            placeholder="Número do processo"
            onChange={(e) => setProcessNumber(e.target.value)}
            value={processNumber}
          />
        </label>
        <button className="searchBtn" type="submit">Buscar</button>
      </form>
    </section>
  );
}

export default SearchProcess;
