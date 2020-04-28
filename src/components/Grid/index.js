import React from "react";
import createGrid from "./createGrid.js";
import getNextCellState from "../../gameFunctions/getNextCellState.js";
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10,
      extend: false,
      name: "",
      interval: false,
      grid: createGrid(50)
    };
  }
  clearGrid = () => {
    this.setState({ grid: createGrid(50) });
  };
  saveGrid = () => {
    this.stopGame();
    const thisKeyExists =
      Object.keys(localStorage).filter(key => {
        if (key === this.state.name) {
          return true;
        } else {
          return false;
        }
      }).length >= 1;
    if (!thisKeyExists) {
      localStorage.setItem(this.state.name, JSON.stringify(this.state.grid));
      this.setState({ name: "" });
    } else {
      window.alert(
        "This name has already been taken - please choose something different!"
      );
    }
  };
  updateCell = (x, y) => {
    const gridCopy = JSON.parse(JSON.stringify(this.state.grid));
    gridCopy[x][y] = !gridCopy[x][y];
    this.setState({ grid: gridCopy });
  };
  startGame = () => {
    if (!this.state.interval) {
      this.setState({ interval: setInterval(this.runGame, this.state.speed) });
    }
  };
  stopGame = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: false });
  };
  changeSpeed = () => {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState(() => ({
        speed: this.state.speed - 1
      }));
      this.setState({ interval: setInterval(this.runGame, this.state.speed) });
    }
  };
  runGame = () => {
    const gridCopy = JSON.parse(JSON.stringify(this.state.grid));
    if (
      JSON.stringify(this.state.grid) ===
      JSON.stringify(createGrid(this.state.grid.length))
    ) {
      this.stopGame();
      return;
    }
    this.setState({
      grid: gridCopy.map((row, x) =>
        row.map((elem, y) => {
          return getNextCellState(this.state.grid, x, y);
        })
      )
    });
  };
  render() {
    return (
      <div>
        {this.state.extend ? (
          <ul>
            {Object.keys(localStorage).map(key => (
              <li key={key}>
                {key}
                <button
                  onClick={() =>
                    this.setState({
                      grid: JSON.parse(localStorage[key]),
                      extend: !this.state.extend
                    })
                  }
                >
                  Load this configuration
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem(key);
                    this.forceUpdate();
                  }}
                >
                  Delete this configuration
                </button>
              </li>
            ))}
            <button
              onClick={() => this.setState({ extend: !this.state.extend })}
            >
              Hide saved configurations!
            </button>
          </ul>
        ) : (
          <div className="container">
            <div className="column">
              <button onClick={this.startGame}>Run</button>
              <button onClick={this.stopGame}>Stop</button>
              <button onClick={this.changeSpeed}>Faster!!!</button>
              <button onClick={this.clearGrid}>Clear</button>
              <input
                style={{ textAlign: "center" }}
                placeholder="Enter a name to save!"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <button onClick={this.saveGrid}>Save</button>

              <button
                onClick={() => this.setState({ extend: !this.state.extend })}
              >
                Show saved sessions!
              </button>
            </div>
            <div className="grid">
              {this.state.grid.map((row, x) =>
                row.map((elem, y) => (
                  <div
                    className={"box " + (elem ? "living" : "")}
                    key={x + "" + y}
                    onClick={() => {
                      this.updateCell(x, y);
                    }}
                  >
                    {/*y*/}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Grid;
