import "./SearchForm.css";

export const SearchForm = () => {
  return (
    <form action="/display" className="searchForm">
      <h1 className="searchTitle">Consulta Processual</h1>
      <p className="searchParagraph">
        Consultar processos por número em um clique
      </p>
      <div className="inputButtonContainer">
        <label className="labelSearch" htmlFor="numeroProcesso">
          <input
            className="inputSearch"
            type="text"
            name="numeroProcesso"
            placeholder="1234567-88.2020.8.10.1234"
          />
        </label>
        <button className="searchBtn" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
};
