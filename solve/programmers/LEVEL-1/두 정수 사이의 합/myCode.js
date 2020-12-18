function solution(a, b) {
  var answer = 0;
  for (let i = a < b ? a : b; i <= (a > b ? a : b); i++) {
    answer += i;
  }
  return answer;
}
