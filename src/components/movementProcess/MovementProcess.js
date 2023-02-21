import "./MovementProcess.css";

const MovementProcess = ({ date, descricao }) => {
  return (
    <>
      <tr>
        <td className="processTable-data">
          <p className="dateMovement">{date}</p>
          <p>{descricao}</p>          
        </td>
      </tr>      
    </>
  );
};

export default MovementProcess;
