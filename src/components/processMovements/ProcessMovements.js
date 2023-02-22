import "./ProcessMovements.css";

const processMovements = ({ date, descricao }) => {
  return (
    <tr>
      <td className="processTable-data">
        <p className="movementsDate">{date}</p>
        <p>{descricao}</p>
      </td>
    </tr>
  );
};

export default processMovements;
