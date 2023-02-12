import { screen } from "@testing-library/react";
import Character from "../types/Character";
import { renderWithProviders } from "../utilities/test-utilities";
import CharacterCard from "./CharacterCard";

test("Chek Card has one button only", async () => {
  renderWithProviders(<CharacterCard character={new Character()} />, {
    preloadedState: { value: [] },
  });
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(1);
});

test("Chek Card has add button when character not in favourite", async () => {
  renderWithProviders(<CharacterCard character={new Character()} />, {
    preloadedState: { value: [] },
  });
  const button = screen.getByRole("button");
  expect(button.getAttribute("aria-label")).toBe("add to favorites");
});

test("Chek Card has remove button when character in favourite", async () => {
  var character = new Character();
  renderWithProviders(<CharacterCard character={character} />, {
    preloadedState: { value: [character] },
  });
  const button = screen.getByRole("button");
  expect(button.getAttribute("aria-label")).toBe("remove from favorites");
});
