import "./ProcessTable.css"

const ProcessTable = () => {
  return (
    <table className="processTable">
      <thead>
        <tr>
          <th className="processTable-header">Movimentações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="processTable-data">dados de movimentações</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProcessTable;