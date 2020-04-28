import sumNeighbours from "./sumNeighbours.js";
import createGrid from "../components/Grid/createGrid.js";
let gS = 5;
let grid = createGrid(gS);
let fullGrid = createGrid(gS, 1);
it("sumNeighbours gives back 0 on empty grids even on edges and outside the board", () => {
  expect(sumNeighbours(grid, 0, 0)).toBe(0);
  expect(sumNeighbours(grid, 2, 2)).toBe(0);
  expect(sumNeighbours(grid, gS, gS)).toBe(0);
  expect(sumNeighbours(grid, 0, gS)).toBe(0);
  expect(sumNeighbours(grid, gS, 0)).toBe(0);
  expect(sumNeighbours(grid, gS, gS)).toBe(0);
  expect(sumNeighbours(grid, -1, gS)).toBe(0);
  expect(sumNeighbours(grid, gS, -1)).toBe(0);
  expect(sumNeighbours(grid, 0, -1)).toBe(0);
  expect(sumNeighbours(grid, -1, 0)).toBe(0);
  expect(sumNeighbours(fullGrid, gS + 10, 0 - 10)).toBe(0);
});
it("sumNeighbours gives back the correct number of adjacent living neighbours even on edges", () => {
  expect(sumNeighbours(grid, 0, 0)).toBe(0);
  expect(sumNeighbours(grid, 1, 1)).toBe(0);
  expect(sumNeighbours(fullGrid, 2, 2)).toBe(8);
  expect(sumNeighbours(fullGrid, gS - 1, gS - 1)).toBe(3);
  expect(sumNeighbours(fullGrid, 0, 0)).toBe(3);
  expect(sumNeighbours(fullGrid, 0, gS - 1)).toBe(3);
  expect(sumNeighbours(fullGrid, gS - 1, 0)).toBe(3);
});
