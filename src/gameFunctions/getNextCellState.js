import sumNeighbours from "./sumNeighbours.js";
export default function getNextCellState(grid, x, y) {
  let neighbours = sumNeighbours(grid, x, y);
  if (neighbours === 3 || (neighbours === 2 && grid[x][y] === true)) {
    return true;
  } else {
    return false;
  }
}
