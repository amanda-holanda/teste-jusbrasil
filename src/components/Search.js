import "./Search.css";
import { useState } from "react";

function Search(props) {
  const [tribunalOrigin, setTribunalOrigin] = useState("");
  //const [info, setInfo] = useState({});
  const [processNumber, setProcessNumber] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("clicou");
    props.onSearch(tribunalOrigin, processNumber);
   
    //setProcessNumber(""); //envia o o input
    /*const dadosFiltrados = (tribunalOrigin)=>{
      return info.data.filter(item => item.tribunal === tribunalOrigin);        
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
          <select            
            name="tribunal"            
            onChange={(e) => setTribunalOrigin(e.target.value)}            
            //required
          >
            <option value="">Selecione o tribunal</option>
            <option value="TJSP">TJSP</option>
            <option value="TJCE">TJCE</option>
            <option value="TJPI">TJPI</option>
          </select>
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
