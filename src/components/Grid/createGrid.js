function createGrid(size, fill) {
  let grid = [...Array(size)].map(x => []);
  grid.forEach((elem, index) => {
    grid[index] = [...Array(size)].map(x => fill || false);
  });
  return grid;
}
export default createGrid;
