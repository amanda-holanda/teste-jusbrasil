import "./Display.css";

function Display(props) {
    //console.log("aqui oh:", props.onDisplay());
    /*function displayDataFiltred() {
        props.getDataFiltred();
    }*/

    const handleData = () => {
        props.onDisplay();
        
        console.log("aqui: ", props.onDisplay())
    }
    handleData();
 
  return (
    <section className="displayContainer">
      <h2>Processo n. X do X</h2>
      <p>Distribuído em X</p>
      <div className="movementsContainer">
        <h4>Movimentações:</h4>
      </div>
    </section>
  );
}

export default Display;
/*{info.data && (          
          <ul>
            {info.data.map((item)=> {
              <li key={item.id}>
                {item.cnj}

              </li>
            })}
          </ul>
)}*/