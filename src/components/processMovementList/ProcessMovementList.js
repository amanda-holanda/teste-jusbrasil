import ProcessMovement from "../processMovement/ProcessMovement";
import "./ProcessMovementList.css";

export const ProcessMovementList = ({ movements }) => {
  return (
    <table className="processTable">
      <thead>
        <tr>
          <th className="processTable-header">Movimentações</th>
        </tr>
      </thead>
      <tbody>
        {movements.map((item) => (
          <ProcessMovement
            key={item.id}
            date={item.date}
            descricao={item.descricao}
          />
        ))}
      </tbody>
    </table>
  );
};
