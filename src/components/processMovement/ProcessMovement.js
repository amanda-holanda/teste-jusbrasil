import "./ProcessMovement.css";

const ProcessMovement = ({ date, descricao }) => {
  return (
    <tr>
      <td className="processTable-data">
        <p className="movementsDate">{date}</p>
        <p>{descricao}</p>
      </td>
    </tr>
  );
};

export default ProcessMovement;
