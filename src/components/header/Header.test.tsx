import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  test("renders header with logo", () => {
    render(
      <Header>
        <p>Test</p>
      </Header>
    );

    const logoElement = screen.getByAltText("logo");

    expect(logoElement).toBeInTheDocument();
  });
});
