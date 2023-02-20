import "./ProcessTable.css"

const ProcessTable = ({listMovements}) => {
  console.log(listMovements)
  return (
    <table className="processTable">
      <thead>
        <tr>
          <th className="processTable-header">Movimentações</th>
        </tr>
      </thead>
      <tbody>
        <tr>dados</tr>        
      </tbody>
    </table>
  );
};

export default ProcessTable;