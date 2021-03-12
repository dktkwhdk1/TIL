function solution(board) {
  let answer = board[0][0];

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j]) {
        board[i][j] =
          1 + Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9
// https://donggoolosori.github.io/2020/12/20/pgmsquare/
// https://programmers.co.kr/learn/courses/30/lessons/12905
