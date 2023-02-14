import "./Search.css";

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviou!");
  };

  return (
    <section className="searchContainer">
      <h1 className="searchTitle">Buscar</h1>
      <p className="searchParagraph">
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
      <form onSubmit={handleSubmit} className="searchForm">
        <label htmlFor="tribunal">
          <input 
            type="text"
            name="tribunal" 
            placeholder="Tribunal" 
            required
          />
        </label>
        <label htmlFor="numeroProcesso">
          <input
            type="number"
            name="numeroProcesso"
            placeholder="Número do processo"
            required
          />
        </label>
        <input type="submit" value="Buscar" />
      </form>
    </section>
  );
}

export default Search;
