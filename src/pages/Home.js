import { useState } from "react";
import SearchProcess from "../components/searchProcess/SearchProcess";
import ProcessList from "../components/processList/ProcessList";
import { filterData } from "../services/filterProcess";
import { fetchData } from "../services/fetchData";

const Home = () => {
  const [listFiltred, setListFiltred] = useState([]);

  const loadData = async (tribunalOrigin, processNumber) => {
    const data = await fetchData("/db.json");
    const dataFiltred = filterData(data, tribunalOrigin, processNumber);
    setListFiltred(dataFiltred);
  };

  return (
    <>
      <SearchProcess onSearch={loadData} />
      <ProcessList list={listFiltred} />
    </>
  );
};

export default Home;
