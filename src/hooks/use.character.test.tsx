import { useCharacter } from "./use.character";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ApiRepository } from "../services/api.repository";
import { Character } from "../models/character";

const mockCharacter: Character = {
  id: 1,
} as Character;

ApiRepository.prototype.getAll = jest.fn();

(ApiRepository.prototype.getAll as jest.Mock).mockResolvedValue({
  results: mockCharacter,
  info: {},
});

function TestComponent() {
  const { handleLoad } = useCharacter();

  return <button onClick={() => handleLoad("")}>Home</button>;
}

describe("Given the hook useCharacter", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<TestComponent></TestComponent>);
    });
    elements = screen.getAllByRole("button");
  });
  describe("When all is OK", () => {
    test("Then it should ...", async () => {
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.getAll).toHaveBeenCalled();
    });
  });
});
