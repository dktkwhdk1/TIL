function solution(n) {
  let answer = 0;
  while (n) {
    answer += n % 10;
    n = parseInt(n / 10);
  }
  return answer;
}

console.log(solution(123)); // 6
// https://programmers.co.kr/learn/courses/30/lessons/12931
