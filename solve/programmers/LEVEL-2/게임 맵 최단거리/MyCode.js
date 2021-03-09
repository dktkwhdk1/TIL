function solution(maps) {
  const check = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (!check[i]) check[i] = [];
      check[i][j] = false;
    }
  }
  const n = maps.length,
    m = maps[0].length;

  const queue = [[0, 0, 0]];
  check[0][0] = true;

  const dy = [-1, 1, 0, 0],
    dx = [0, 0, -1, 1];

  while (queue.length) {
    const [cy, cx, answer] = queue.shift();

    if (cy === maps.length - 1 && cx === maps[0].length - 1) return answer + 1;

    for (let i = 0; i < 4; i++) {
      const ny = cy + dy[i],
        nx = cx + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m || check[ny][nx]) {
        continue;
      }

      if (maps[ny][nx]) {
        check[ny][nx] = true;
        queue.push([ny, nx, answer + 1]);
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // 11
// https://programmers.co.kr/learn/courses/30/lessons/1844
