const robotPath = function (room, src, dst) {
  let check = [];
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (!check[i]) check[i] = [];
      check[i][j] = false;
    }
  }
  let dy = [-1, 0, 0, 1];
  let dx = [0, -1, 1, 0];

  let q = [[...src, 0]];
  while (q.length) {
    let front = q.shift();
    let y = front[0];
    let x = front[1];
    let result = front[2];

    if (dst[0] === y && dst[1] === x) return result;
    for (let i = 0; i < 4; i++) {
      let yy = y + dy[i];
      let xx = x + dx[i];

      if (yy < 0 || xx < 0 || yy >= room.length || xx >= room[0].length)
        continue;

      if (!check[yy][xx] && !room[yy][xx]) {
        q.push([yy, xx, result + 1]);
        check[yy][xx] = true;
      }
    }
  }
};

console.log(
  robotPath(
    [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0],
    ],
    [4, 2],
    [2, 2]
  )
); // 8
