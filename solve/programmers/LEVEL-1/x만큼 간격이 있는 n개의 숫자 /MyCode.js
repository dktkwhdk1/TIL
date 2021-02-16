function solution(x, n) {
  const answer = [];
  if (x < 0) {
    for (let i = x; i >= x * n; i += x) {
      answer.push(i);
    }
  } else if (x > 0) {
    for (let i = x; i <= x * n; i += x) {
      answer.push(i);
    }
  } else {
    for (let i = 0; i < n; i++) {
      answer.push(0);
    }
  }
  return answer;
}

console.log(solution(0, 5)); // [0, 0, 0, 0, 0]
// https://programmers.co.kr/learn/courses/30/lessons/12954
