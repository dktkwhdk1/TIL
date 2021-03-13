function solution(dirs) {
  const check = [];
  for (let i = 0; i < 11; i++) {
    check[i] = [];
    for (let j = 0; j < 11; j++) {
      check[i][j] = [];
      for (let r = 0; r < 11; r++) {
        check[i][j][r] = [];
        for (let c = 0; c < 11; c++) {
          check[i][j][r][c] = false;
        }
      }
    }
  }
  let answer = 0;
  let cy = 5,
    cx = 5,
    ny = 5,
    nx = 5;

  for (const dir of dirs) {
    (cy = ny), (cx = nx);
    switch (dir) {
      case 'U':
        ny = cy - 1;
        break;
      case 'D':
        ny = cy + 1;
        break;
      case 'R':
        nx = cx + 1;
        break;
      case 'L':
        nx = cx - 1;
        break;
      default:
        break;
    }
    if (ny < 0 || ny > 10 || nx < 0 || nx > 10) {
      (ny = cy), (nx = cx);
      continue;
    }
    if (!check[cy][cx][ny][nx]) {
      check[cy][cx][ny][nx] = true;
      check[ny][nx][cy][cx] = true;
      answer += 1;
    }
  }
  return answer;
}

console.log(solution('ULURRDLLU')); // 7
console.log(solution('LULLLLLLU')); // 7
console.log(solution('LLLLLLLLLLLLLLLLLLLLLL')); // 7

/* 리팩토링 전 */
function solution2(dirs) {
  const check = [];
  for (let i = 0; i < 11; i++) {
    check[i] = [];
    for (let j = 0; j < 11; j++) {
      check[i][j] = [];
      for (let r = 0; r < 11; r++) {
        check[i][j][r] = [];
        for (let c = 0; c < 11; c++) {
          check[i][j][r][c] = false;
        }
      }
    }
  }
  let answer = 0;
  let r = 5;
  let c = 5;

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    if (dir === 'U') {
      if (r - 1 < 0) continue;
      if (!check[r][c][r - 1][c]) {
        check[r][c][r - 1][c] = true;
        check[r - 1][c][r][c] = true;
        answer += 1;
      }
      r -= 1;
    } else if (dir === 'D') {
      if (r + 1 > 10) continue;
      if (!check[r][c][r + 1][c]) {
        check[r][c][r + 1][c] = true;
        check[r + 1][c][r][c] = true;
        answer += 1;
      }
      r += 1;
    } else if (dir === 'R') {
      if (c + 1 > 10) continue;
      if (!check[r][c][r][c + 1]) {
        check[r][c][r][c + 1] = true;
        check[r][c + 1][r][c] = true;
        answer += 1;
      }
      c += 1;
    } else {
      if (c - 1 < 0) continue;
      if (!check[r][c][r][c - 1]) {
        check[r][c][r][c - 1] = true;
        check[r][c - 1][r][c] = true;
        answer += 1;
      }
      c -= 1;
    }
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/49994
