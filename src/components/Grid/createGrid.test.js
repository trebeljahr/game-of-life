import createGrid from "./createGrid.js";

it("returns array of certain size", () => {
  expect(createGrid(5).length).toBe(5);
  expect(createGrid(5).reduce((r, e) => r + e.reduce(r => r + 1, 0), 0)).toBe(
    25
  );
});
