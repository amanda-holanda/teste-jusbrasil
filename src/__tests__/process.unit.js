import { render, screen } from "@testing-library/react";
import Process from "../components/process/Process";

const mockProcess = {
  cnj: "5001682-88.2020.8.13.0671",
  partes: {
    autor: "Amanda de Sousa Araújo",
    reu: "Antonio da Silva Almeida",
  },
  tribunal: "TJSP",
  date: "18.05.2022",
  movimentacao: [
    {
      id: 11,
      date: "15.02.2023",
      descricao:
        "Suspensão do prazo referente ao usuário foi alterado para 18/07/2018 devido à alteração da tabela de feriados",
    },
  ],
};

describe("<Process />", () => {
  it("Renderiza as informações do processo que foram passadas em parametros por props", () => {
    const {container} = render(<Process {...mockProcess} />);

    const processTitle = screen.getByText(
      `Processo n. ${mockProcess.cnj} do ${mockProcess.tribunal}`
    );
    const autor = screen.getByText(mockProcess.partes.autor);
    const reu = screen.getByText(mockProcess.partes.reu);
    const date = screen.getByText(`Distribuído em ${mockProcess.date}`);
    const movimentacao = container.querySelector(".processTable");

    expect(processTitle).toBeInTheDocument();
    expect(autor).toBeInTheDocument();
    expect(reu).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(movimentacao).toBeInTheDocument();
  });
});
