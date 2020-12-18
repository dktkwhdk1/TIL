function solution(board, moves) {
  let stack = [];
  let top = -1;
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        let temp = board[j][move];
        board[j][move] = 0;

        if (top !== -1 && stack[top] === temp) {
          answer += 2;
          stack[top--] = 0;
        } else stack[++top] = temp;
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
