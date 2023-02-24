import "./SearchForm.css";
import { InputForm } from "./InputForm";

export const SearchForm = () => {
  return (
    <form action="/display" className="searchForm">
      <h1 className="searchTitle">Consulta Processual</h1>
      <p className="searchParagraph">
        Consultar processos por número em um clique
      </p>
      <div className="inputButtonContainer">
        <label className="labelSearch" htmlFor="numeroProcesso">
          <InputForm />
        </label>
        <button className="searchBtn" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
};
