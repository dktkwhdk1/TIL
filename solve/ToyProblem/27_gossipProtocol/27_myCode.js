const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  let arr = createMatrix(village);

  let check = [];
  for (let i = 0; i < arr.length; i++) {
    if (!check[i]) check[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      check[i][j] = false;
    }
  }
  let q = [];
  q.push([row, col, 0]);
  check[row][col] = true;

  let dy = [-1, 0, 0, 1];
  let dx = [0, -1, 1, 0];

  while (q.length) {
    let front = q.shift();
    let y = front[0],
      x = front[1],
      day = front[2];

    for (let i = 0; i < 4; i++) {
      let yy = y + dy[i];
      let xx = x + dx[i];

      if (yy < 0 || xx < 0 || yy >= arr.length || xx >= arr[0].length) continue;

      if (!check[yy][xx] && arr[yy][xx] === '1') {
        q.push([yy, xx, day + 1]);
        check[yy][xx] = true;
      }
    }
    if (!q.length) return day;
  }
};

console.log(gossipProtocol(['0101', '0111', '0110', '0100'], 1, 2)); // 3
