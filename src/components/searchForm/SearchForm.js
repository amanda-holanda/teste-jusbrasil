export const SearchForm = () => {
  return (
    <section className="searchContainer">
      <h1 className="searchTitle">Consulta Processual</h1>
      <p className="searchParagraph">
        Consultar processos por número em um clique
      </p>
      <form action="/display" className="searchForm">
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
      </form>
    </section>
  );
};
