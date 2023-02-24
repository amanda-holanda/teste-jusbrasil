import { render, screen } from "@testing-library/react";
import { SearchForm } from "../components/searchForm/SearchForm";

const mockSearchForm = {
  field: {
    type: "text",
    name: "numeroProcesso",
    label: "numeroProcesso",
    placeholder: "1234567-88.2020.8.10.1234",    
  },
  submit: "Buscar",
};

describe("<SearchForm />", () => {
  it("Renderiza um formulário com os campos necessários", () => {
    render(<SearchForm />);

    const numeroProcesso = screen.getByPlaceholderText(
      mockSearchForm.field.placeholder
    );
    const buscar = screen.getByRole("button");

    expect(numeroProcesso).toBeInTheDocument();
    expect(buscar).toBeInTheDocument();
  });
});
