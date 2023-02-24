import { render, screen } from "@testing-library/react";
import { InputForm } from "../components/searchForm/InputForm";
import userEvent from "@testing-library/user-event";

describe("<InputForm />", () => {
  it("Renderiza um campo de texto que pode ser preenchido", () => {
    render(<InputForm type="text" placeholder="1234567-88.2020.8.10.1234" />);

    const input = screen.getByPlaceholderText("1234567-88.2020.8.10.1234");
    expect(input).toBeInTheDocument();

    userEvent.type(input, "CNJ digitado pelo usuário");
    expect(input).toHaveValue("CNJ digitado pelo usuário");
  });
});
