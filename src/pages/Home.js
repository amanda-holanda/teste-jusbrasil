import { useState } from "react";
import Search from "../components/search/Search";
import ProcessList from "../components/processList/ProcessList";

const API = "Http://localhost:3000/";

const Home = () => {
  const [getDataFiltred, setGetDataFiltred] = useState([]);

  const loadData = async (tribunalOrigin, processNumber) => {
    const res = await fetch(API + "db.json");
    const data = await res.json();
    filterData(data, tribunalOrigin, processNumber);
  };

  const filterData = (data, tribunalOrigin, processNumber) => {
    console.log(data, tribunalOrigin, processNumber);
    const dataFiltred = data.filter(
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
