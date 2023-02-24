import { render, screen } from "@testing-library/react";
import { SearchButton } from "../components/searchForm/SearchButton";

describe("<SearchButton />", () => {
  it("Renderiza um botão corretamente", () => {
    render(<SearchButton>Buscar</SearchButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });
});
