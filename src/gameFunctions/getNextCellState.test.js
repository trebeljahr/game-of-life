import getNextCellState from "./getNextCellState.js";
import createGrid from "../components/Grid/createGrid.js";
let gS = 5;
let grid = createGrid(gS);
let fullGrid = createGrid(gS, 1);
it("should give back if a cell is dying or not", () => {
  expect(getNextCellState(fullGrid, 2, 2)).toBe(false);
  expect(getNextCellState(grid, 2, 2)).toBe(false);
  expect(getNextCellState(fullGrid, 0, 0)).toBe(true);
});
