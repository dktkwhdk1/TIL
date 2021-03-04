function solution(citations) {
  citations.sort((a, b) => b - a);
  let answer = citations.length ? citations[0] : 0;
  while (1) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (answer <= citations[j]) {
        count += 1;
      } else break;
    }
    if (answer <= count) break;
    else answer -= 1;
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([5, 5, 5, 5, 5])); // 5
console.log(solution([1, 2, 2, 5, 5, 5, 5])); // 4
console.log(solution([10000])); // 1
// https://programmers.co.kr/learn/courses/30/lessons/42747
