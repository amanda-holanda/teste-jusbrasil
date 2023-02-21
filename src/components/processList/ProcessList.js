import Process from "../process/Process";

const ProcessList = ({ list }) => {
  return list.map((item) => (
    <Process
      key={item.id}
      cnj={item.cnj}
      tribunal={item.tribunal}
      date={item.date}
      movimentacao={item.movimentacao}
    />
  ));
};

export default ProcessList;
