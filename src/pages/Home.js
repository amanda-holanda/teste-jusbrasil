import { useState } from "react";
import Display from "../components/Display";
import Search from "../components/Search";

const API = "Http://localhost:3000/";

const Home = () => {
  const [getDataFiltred, setGetDataFiltred] = useState();
     
  const loadData = async (tribunalOrigin, processNumber) => {    
    const res = await fetch(API + "db.json");
    const dataLoaded = await res.json();
    console.log("os dados carregados: ", dataLoaded);
    filterData(dataLoaded, tribunalOrigin)
  };

  const filterData = (dataLoaded, tribunalOrigin) => {    
    console.log(dataLoaded,tribunalOrigin);    
    const dataFiltred = dataLoaded.data.filter(
      (item) => item.tribunal === tribunalOrigin
    );
    console.log("os dados filtrados por tribunal: ", dataFiltred);    
    /*getDataFiltred(dataFiltred);   */ 
  };
  
  
  /*const getDataFiltred = (dataFiltred) => {
    console.log("estão aqui: ", dataFiltred)
    return dataFiltred;
  }*/
 
   
  return (
    <>
      <Search onSearch={loadData} />
      <Display onDisplay={filterData}/>
    </>
  );
};

export default Home;
