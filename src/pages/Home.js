import { useState } from "react";
import SearchProcess from "../components/searchProcess/SearchProcess";
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
    const dataFiltred = data.filter(
      (item) => item.tribunal === tribunalOrigin || item.cnj === processNumber
    );
    setGetDataFiltred(dataFiltred);
  };

  return (
    <>
      <SearchProcess onSearch={loadData} />
      <ProcessList list={getDataFiltred} />
    </>
  );
};

export default Home;
