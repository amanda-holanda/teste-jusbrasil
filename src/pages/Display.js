import ProcessList from "../components/processList/ProcessList";
import { filterData } from "../services/filterProcess";
import { fetchData } from "../services/fetchData";
import { useState } from "react";

export const Display = () => {
  const [listFiltred, setListFiltred] = useState([]);

  let search = window.location.search;
  const paramsString = search;
  const searchParam = new URLSearchParams(paramsString);
  const param = searchParam.get("numeroProcesso");

   
  const loadData = async (param) => {
    const data = await fetchData("db.json");
    const dataFiltred = filterData(data, param);
    setListFiltred(dataFiltred);
  };

  return <ProcessList list={listFiltred} />
};
