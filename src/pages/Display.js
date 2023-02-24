import { filterData } from "../services/filterProcess";
import { fetchData } from "../services/fetchData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
import Process from "../components/process/Process";

export const Display = () => {
  const [process, setProcess] = useState();
  const [loaded, setLoaded] = useState(false);
  const urlParameter = window.location.search;
  const searchParams = new URLSearchParams(urlParameter);
  const processNumber = searchParams.get("numeroProcesso");

  const loadData = async (processNumber) => {
    const data = await fetchData("db.json");
    const dataFiltred = filterData(data, processNumber);
    setProcess(dataFiltred);
    setLoaded(true);
  };

  useEffect(() => {
    loadData(processNumber);
  }, []);

  return (
    <>
      <Link className="returnButton" to="/">
        Voltar
      </Link>
      {loaded ? <Process {...process} /> : 'Carregando'}      
    </>
  );
};
