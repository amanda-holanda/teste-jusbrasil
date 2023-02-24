import ProcessMovement from "../processMovement/ProcessMovement";

export const ProcessMovementList = ({ movements }) => {
  return movements.map((item) => (
    <ProcessMovement
      key={item.id}
      date={item.date}
      descricao={item.descricao}
    />
  ));
};
