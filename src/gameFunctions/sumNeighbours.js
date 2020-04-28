import insideField from "./insideField.js";
export default function sumNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (insideField(grid.length, y + j) && insideField(grid.length, x + i)) {
        if (!(i === 0 && j === 0)) {
          sum += grid[x + i][y + j];
        }
      }
    }
  }
  return sum;
}
