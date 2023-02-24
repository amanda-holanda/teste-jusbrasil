import { render, screen } from "@testing-library/react";
import { InputForm } from "../components/searchForm/InputForm";
import userEvent from "@testing-library/user-event";

describe("<InputForm />", () => {
  it("Renderiza um campo de texto que pode ser preenchido", () => {
    render(<InputForm />);

    const input = screen.getByPlaceholderText("1234567-88.2020.8.10.1234");
    expect(input).toBeInTheDocument();

    const cnj = "CNJ digitado pelo usuário";

    userEvent.type(input, cnj);
    expect(input).toHaveValue(cnj);
  });
});
