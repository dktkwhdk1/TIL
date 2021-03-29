function solution(m, n, board) {
  let answer = 0,
    canRemove = true;
  board = board.map(block => block.split(''));

  while (canRemove) {
    const { check, flag } = check4block(m, n, board);
    if (!flag) break;
    canRemove = flag;

    board = board.map((blocks, y) =>
      blocks.map((item, x) => {
        if (check[y][x]) {
          answer += 1;
          return (item = '*');
        }
        return item;
      })
    );
    board = goDown(m, n, board);
    console.log('hi', board);
  }
  return answer;
}

function goDown2(m, n, board) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 1; j++) {
      // 불필요한 검사를 하고 있긴 함
      if (board[j + 1][i] === '*') {
        board[j + 1][i] = board[j][i];
        board[j][i] = '*';
      }
    }
  }
  return board;
}

function goDown(m, n, board) {
  for (let i = 0; i < n; i++) {
    for (let j = m - 1; j >= 0; j--) {
      if (board[j][i] !== '*') continue;
      for (let k = j - 1; k >= 0; k--) {
        if (board[k][i] === '*') continue;
        board[j][i] = board[k][i];
        board[k][i] = '*';
        break;
      }
    }
  }
  return board;
}
/*
[
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]
*/

function check4block(m, n, board) {
  // 이렇게 안 하고, Array(m).fill(Array(n).fill(false)); 이렇게 하면
  // false로 채워진 길이 n짜리 배열이 m개가 채워지긴 하지만,
  // false로 채워진 길이 n짜리 배열들의 주소가 모두 똑같아서
  // 원하는 공간을 수정하거나 원하는 공간에 값을 채워넣을 수 없음
  const check = Array.from(Array(m), () => Array(n).fill(false));
  let flag = false;
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === '*') continue;
      if (
        board[i][j] !== '*' &&
        board[i][j] === board[i][j + 1] &&
        board[i][j + 1] === board[i + 1][j + 1] &&
        board[i + 1][j + 1] === board[i + 1][j] &&
        board[i + 1][j] === board[i][j]
      ) {
        flag = true;
        check[i][j] = true;
        check[i][j + 1] = true;
        check[i + 1][j] = true;
        check[i + 1][j + 1] = true;
      }
    }
  }
  return { check, flag };
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15

console.log(solution(2, 2, ['CC', 'CC'])); // 4
console.log(solution(2, 2, ['CA', 'CC'])); // 0

console.log(solution(4, 4, ['AAAA', 'AAAA', 'AABB', 'AABB'])); // 16
// https://programmers.co.kr/learn/courses/30/lessons/17679
