import { useState } from "react";
import Search from "../components/search/Search";
import ProcessList from "../components/processList/ProcessList";

const API = "Http://localhost:3000/";

const Home = () => {
  const [getDataFiltred, setGetDataFiltred] = useState([]);

  const loadData = async (tribunalOrigin, processNumber) => {
    const res = await fetch(API + "db.json");
    const dataLoaded = await res.json();
    filterData(dataLoaded, tribunalOrigin, processNumber);
  };

  const filterData = (dataLoaded, tribunalOrigin, processNumber) => {
    console.log(dataLoaded, tribunalOrigin, processNumber);
    const dataFiltred = dataLoaded.data.filter(
      (item) => item.tribunal === tribunalOrigin || item.cnj === processNumber
    );
    console.log("os dados filtrados: ", dataFiltred);
    setGetDataFiltred(dataFiltred);
  };

  return (
    <>
      <Search onSearch={loadData} />
      <ProcessList list={getDataFiltred} />
    </>
  );
};

export default Home;
