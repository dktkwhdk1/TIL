function solution(n) {
  const answer = [];
  let number = 1;
  let r = -1,
    c = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      if (i % 3 === 1) r += 1;
      if (i % 3 === 2) c += 1;
      if (i % 3 === 0) {
        r -= 1;
        c -= 1;
      }
      if (!answer[r]) answer[r] = [];
      answer[r][c] = number;
      number += 1;
    }
  }
  return answer.flat();
}

console.log(solution(6));
// [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11];
