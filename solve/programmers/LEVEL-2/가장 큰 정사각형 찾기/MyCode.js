function solution(board) {
  function isPossible(len) {
    for (let i = 0; i <= board.length - len; i++) {
      for (let j = 0; j <= board[0].length - len; j++) {
        let flag = true;
        for (let r = i; r < i + len; r++) {
          for (let c = j; c < j + len; c++) {
            if (!board[r][c]) {
              flag = false;
              break;
            }
          }
          if (!flag) break;
        }
        if (flag) return true;
      }
    }
  }

  const max = board.length < board[0].length ? board.length : board[0].length;
  for (let i = max; i >= 1; i--) {
    if (isPossible(i)) return i * i;
  }
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9
