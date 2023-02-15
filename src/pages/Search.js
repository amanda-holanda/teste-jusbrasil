import "./Search.css";
import { useState } from "react";

const API = 'Http://localhost:5000/';

function Search() {
  const[processNumber, setProcessNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataSearch = {
      processNumber
    }      
    //envio para API
    console.log(dataSearch);

    await fetch(API + "data", {
      method: "POST",
      body: JSON.stringify(dataSearch),
      headers: { 
        "Content-Type": "application/json",
      },
    });


    setProcessNumber(""); //envia o o input
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
          />
        </label>
        <label htmlFor="numeroProcesso">
          <input
            type="number"
            name="numeroProcesso"
            placeholder="Número do processo"
            onChange= {(e) => setProcessNumber(e.target.value)}
            value={processNumber}
            required
          />
        </label>
        <input type="submit" value="Buscar" />
      </form>
    </section>
  );
}

export default Search;
