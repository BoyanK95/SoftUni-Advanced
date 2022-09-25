function ticTacToe(input) {
  let initDashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let isFirstPlayer = true;
  for (let coordinates of input) {
    let [row, col] = coordinates.split(" ");
    if (initDashboard[row][col]) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }
    let marker = isFirstPlayer ? "X" : "O";
    initDashboard[row][col] = marker;

    for (let i = 0; i < initDashboard.length; i++) {
      if (
        initDashboard[i][0] === marker &&
        initDashboard[i][1] === marker &&
        initDashboard[i][2] === marker
      ) {
        console.log(`Player ${marker} wins!`);
      } else if (
        initDashboard[0][i] === marker &&
        initDashboard[1][i] === marker &&
        initDashboard[2][i] === marker
      ) {
        console.log(`Player ${marker} wins!`);
        return;
      } else if (
        initDashboard[0][0] === marker &&
        initDashboard[1][1] === marker &&
        initDashboard[2][2] === marker
      ) {
        console.log(`Player ${marker} wins!`);
        return;
      } else if (
        initDashboard[0][2] === marker &&
        initDashboard[1][1] === marker &&
        initDashboard[2][0] === marker
      ) {
        console.log(`Player ${marker} wins!`);
        return;
      }
    }

    isFreeSpace = false;

    for (let rows = 0; rows < initDashboard.length; rows++) {
      for (let colums = 0; colums < initDashboard[rows].length; colums++) {
        if (!initDashboard[rows][colums]) {
          isFirstPlayer = true;
          break;
        }
      }
      if (isFreeSpace) {
        break;
      }
    }
    if (isFreeSpace) {
      console.log("The game ended! Nobody wins :(");
      return;
    }
    function checkWin(params) {
        
    }

    isFirstPlayer = !isFirstPlayer;
  }
}

ticTacToe([
  "0 1",

  "0 0",

  "0 2",

  "2 0",

  "1 0",

  "1 1",

  "1 2",

  "2 2",

  "2 1",

  "0 0",
]);
console.log("--------------------------");

ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);

console.log("-------------------------------");

ticTacToe([
  "0 1",

  "0 0",

  "0 2",

  "2 0",

  "1 0",

  "1 2",

  "1 1",

  "2 1",

  "2 2",

  "0 0",
]);
