import { useState } from "react";
import ProcessSearch from "../components/processSearch/ProcessSearch";
import ProcessList from "../components/processList/ProcessList";
import { filterData } from "../services/filterProcess";
import { fetchData } from "../services/fetchData";

const Home = () => {
  const [listFiltred, setListFiltred] = useState([]);

  const loadData = async (processNumber) => {
    const data = await fetchData("/db.json");
    const dataFiltred = filterData(data, processNumber);
    setListFiltred(dataFiltred);
  };

  return (
    <>
      <ProcessSearch onSearch={loadData} />
      <ProcessList list={listFiltred} />
    </>
  );
};

export default Home;
