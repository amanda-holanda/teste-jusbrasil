import ProcessList from "../components/processList/ProcessList";
import { filterData } from "../services/filterProcess";
import { fetchData } from "../services/fetchData";
import { useState } from "react";

export const Display = () => {
  const [listFiltred, setListFiltred] = useState([]);
  const urlParameter = window.location.search;
  const searchParams = new URLSearchParams(urlParameter);
  const processNumber = searchParams.get("numeroProcesso");
  
  const loadData = async (processNumber) => {
    const data = await fetchData("db.json");
    const dataFiltred = filterData(data, processNumber);
    setListFiltred(dataFiltred);
  };

  return (
    <>      
      <ProcessList onDisplay={loadData(processNumber)} list={listFiltred} />
    </>
  );
};
