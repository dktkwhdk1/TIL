function solution(numbers, target) {
  let answer = 0;
  function calc(sum, idx) {
    if (idx === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }
    calc(sum + numbers[idx], idx + 1);
    calc(sum - numbers[idx], idx + 1);
  }
  calc(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
// https://programmers.co.kr/learn/courses/30/lessons/43165
