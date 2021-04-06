/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let r = matrix.length,
    c = -1;

  for (let i = 0; i < matrix.length; i++) {
    if (c === matrix.length) c = -1;
    c += 1;
    for (let j = 0; j < matrix[0].length; j++) {
      if (!r) r = matrix.length;
      r -= 1;
      if (Array.isArray(matrix[r][c])) {
        matrix[i][j] = [matrix[i][j], matrix[r][c][0]];
      } else {
        matrix[i][j] = [matrix[i][j], matrix[r][c]];
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = matrix[i][j][1];
    }
  }
  return matrix;
};

// Test
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

console.log(rotate([[1]])); // [[1]]

console.log(
  rotate([
    [1, 2],
    [3, 4],
  ])
); // [[3,1],[4,2]]

var rotate2 = function (matrix) {
  let r = matrix.length,
    c = -1;
  matrix = matrix
    .map(row => {
      if (c === matrix.length) c = -1;
      c += 1;
      return row.map(val => {
        if (!r) r = matrix.length;
        r -= 1;
        if (Array.isArray(matrix[r][c])) {
          return [val, matrix[r][c][0]];
        }
        return [val, matrix[r][c]];
      });
    })
    .map(row => row.map(val => val[1]));
  return matrix;
};
