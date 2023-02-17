import "./Search.css";
import { useState } from "react";

function Search(loadData) {
  const [tribunalOrigin, setTribunalOrigin] = useState("");
  //const [info, setInfo] = useState({});
  const [processNumber, setProcessNumber] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setTribunalOrigin("");    
    console.log("clicou");
    loadData(tribunalOrigin);
   
    //setProcessNumber(""); //envia o o input
    /*const dadosFiltrados = (tribunalOrigin)=>{
      return info.data.filter(item => item.includes(tribunalOrigin));        
    };
    console.log(dadosFiltrados);*/
  };  

  /*useEffect(()=> {
    if(tribunalOrigin) {
      fetch(API + "db.json")
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(response);
      })
    }

  }, [tribunalOrigin]);*/

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
            placeholder="Tribunal de Origem"
            onChange={(e) => setTribunalOrigin(e.target.value)}
            value={tribunalOrigin}
            //required
          />
        </label>
        <label htmlFor="numeroProcesso">
          <input
            type="number"
            name="numeroProcesso"
            placeholder="Número do processo"
            onChange={(e) => setProcessNumber(e.target.value)}
            value={processNumber}
            //required
          />
        </label>
        <button type="submit">Buscar</button>
      </form>      
    </section>
  );
}

export default Search;
