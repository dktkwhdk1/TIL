/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const check1 = Array(10).fill(false),
      check2 = Array(10).fill(false);
    for (let j = 0; j < board[0].length; j++) {
      const rowEl = board[i][j];
      const colEl = board[j][i];

      if (rowEl !== '.') {
        if (check1[+rowEl]) return false;
        check1[+rowEl] = true;
      }
      if (colEl !== '.') {
        if (check2[+colEl]) return false;
        check2[+colEl] = true;
      }
      if (!(i % 3) && !(j % 3)) {
        if (!check3x3(board, i, j)) return false;
      }
    }
  }
  return true;
};

function check3x3(board, row, col) {
  const check = Array(10).fill(false);
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      const val = board[i][j];

      if (val === '.') continue;
      if (check[+val]) return false;
      check[+val] = true;
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // false
