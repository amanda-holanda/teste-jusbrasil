import Display from "../components/Display";
import Search from "../components/Search";
import { useState } from "react";

const API = "Http://localhost:3000/";

const Home = () => {
    const[tribunalOrigin, setTribunalOrigin] = useState("");
    const [loadingData, setLoadingData] = useState({});

    const loadData = async(tribunalOrigin, processNumber) => {
        console.log(tribunalOrigin, processNumber)
        const res = await fetch(API + "db.json");
        const dataLoaded = await res.json();
        setLoadingData(tribunalOrigin);
        console.log("os dados carregados: ", dataLoaded);
    }

    return (
        <>
        <Search onSearch={loadData} />
        <Display />
        </>
    )
}

export default Home;