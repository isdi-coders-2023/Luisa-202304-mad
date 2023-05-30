import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer component", () => {
  test("renders footer with role", () => {
    render(<Footer></Footer>);

    const h2element = screen.getByRole("contentinfo");

    expect(h2element).toBeInTheDocument();
  });
});
