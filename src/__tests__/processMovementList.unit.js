import { render, screen } from "@testing-library/react";
import { ProcessMovementList } from "../components/processMovementList/ProcessMovementList";

const movimentacoes = [
  {
    id: 21,
    date: "15.02.2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 22,
    date: "11.01.2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

describe("<ProcessMovementList />", () => {
  it("Renderiza cabeçalho e o número correto de movimentações", () => {
    const { container } = render(
      <ProcessMovementList movements={movimentacoes} />
    );

    const tableHeader = screen.getByText("Movimentações");
    const movementCount =
      container.querySelectorAll(".processTable-data").length;

    expect(tableHeader).toBeInTheDocument();
    expect(movementCount).toBe(2);
  });
});
