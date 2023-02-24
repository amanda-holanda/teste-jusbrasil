import { render, screen } from "@testing-library/react";
import { SearchForm } from "../components/searchForm/SearchForm";

describe("<SearchForm />", () => {
  it("Renderiza um formulário com os campos necessários", () => {
    render(<SearchForm />);

    const placeholder = "1234567-88.2020.8.10.1234";

    const numeroProcesso = screen.getByPlaceholderText(placeholder);
    const buscar = screen.getByRole("button");

    expect(numeroProcesso).toBeInTheDocument();
    expect(buscar).toBeInTheDocument();
  });
});
