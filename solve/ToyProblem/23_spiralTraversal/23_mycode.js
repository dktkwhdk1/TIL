const spiralTraversal = function (matrix) {
  let check = [];
  for (let i = 0; i < matrix.length; i++) {
    check[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      check[i][j] = false;
    }
  }
  let result = '';
  let r = 0;
  let c = 0;

  while (1) {
    result += matrix[r][c];
    check[r][c] = true;

    if (c < matrix[0].length - 1 && !check[r][c + 1]) {
      if (r) {
        if (check[r - 1][c]) {
          c++;
          continue;
        }
      } else {
        c++;
        continue;
      }
    }
    if (r < matrix.length - 1 && !check[r + 1][c]) {
      r++;
      continue;
    }
    if (c > 0 && !check[r][c - 1]) {
      c--;
      continue;
    }
    if (r > 0 && !check[r - 1][c]) {
      r--;
      continue;
    }
    break;
  }
  return result;
};
let matrix = [
  ['T', 'y', 'r', 'i'],
  ['i', 's', 't', 'o'],
  ['n', 'r', 'e', 'n'],
  ['n', 'a', 'L', ' '],
];
console.log(spiralTraversal(matrix)); // Tyrion Lannister
