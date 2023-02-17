import Display from "../components/Display";
import Search from "../components/Search";

const API = "Http://localhost:3000/";

const Home = () => {
    //const[tribunalOrigin, setTribunalOrigin] = useState("");
    //const [loadingData, setLoadingData] = useState({});

    const loadData = async(tribunalOrigin, processNumber) => {
        console.log(tribunalOrigin, processNumber)
        const res = await fetch(API + "db.json");
        const dataLoaded = await res.json();        
        console.log("os dados carregados: ", dataLoaded);

        const filterData = (dataLoaded,tribunalOrigin)=>{
            const dataFiltred = dataLoaded.data.filter(item => item.tribunal === tribunalOrigin); 
            console.log("os dados filtrados por tribunal", dataFiltred);
            return dataFiltred;       
        };
        return filterData(dataLoaded,tribunalOrigin);
    }      

    return (
        <>
        <Search onSearch={loadData}/>
        <Display />
        </>
    )
}

export default Home;