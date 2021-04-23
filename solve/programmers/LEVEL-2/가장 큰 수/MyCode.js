// https://programmers.co.kr/learn/courses/30/lessons/42746#
function solution(numbers) {
  const answer = numbers
    .map(val => val.toString())
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');
  return answer[0] === '0' ? '0' : answer;
}

// Test
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
