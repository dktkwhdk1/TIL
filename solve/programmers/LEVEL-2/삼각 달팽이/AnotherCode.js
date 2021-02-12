function solution(n) {
  const answer = [];
  const totalNumber = (n * (n + 1)) / 2;
  const dx = [1, 0, -1];
  const dy = [0, 1, -1];
  let x = 0;
  let y = 0;
  const matrix = Array.from(new Array(n), () => new Array(n).fill(0));
  let direction = 0;

  for (let i = 1; i <= totalNumber; i++) {
    matrix[x][y] = i;
    const nx = x + dx[direction];
    const ny = y + dy[direction];
    if (nx >= n || ny >= n || nx < 0 || ny < 0 || matrix[nx][ny] !== 0) {
      direction = (direction + 1) % 3;
      x += dx[direction];
      y += dy[direction];
      continue;
    }
    x = nx;
    y = ny;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(matrix[i][j]);
    }
  }
  return answer;
}
// https://rutgo-letsgo.tistory.com/182
