import { render, screen } from "@testing-library/react";
import { ProcessMovementList } from "../components/processMovementList/ProcessMovementList";

const movimentacoes = [
  {
    id: 21,
    date: "15.02.2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const [movimentacao] = movimentacoes;

describe("<ProcessMovement />", () => {
  it("Renderiza conteúdo correto da movimentação", () => {
    render(<ProcessMovementList movements={movimentacoes} />);

    const date = screen.getByText(movimentacao.date);
    const descricao = screen.getByText(movimentacao.descricao);

    expect(date).toBeInTheDocument();
    expect(descricao).toBeInTheDocument();
  });
});
