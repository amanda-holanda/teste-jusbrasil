import "./MovementProcess.css"

const MovementProcess = ({ date, descricao }) => {  
  return (
    <tr>
      <td className="processTable-data">{date}</td>
      <td className="processTable-data">{descricao}</td>
    </tr>
  );
};

export default MovementProcess;
