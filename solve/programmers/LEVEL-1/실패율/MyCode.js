function solution(N, stages) {
  const fails = [];
  for (let i = 1; i <= N + 1; i++) {
    fails[i] = [0, 0, i];
  }
  for (let i = 0; i < stages.length; i++) {
    for (let j = 1; j <= stages[i]; j++) {
      fails[j][1] += 1;
      if (stages[i] <= j) fails[j][0] += 1;
    }
  }
  const answer = fails
    .filter((ele, idx) => idx <= N)
    .sort((a, b) => {
      const result = b[0] / b[1] - a[0] / a[1];
      if (!result) return a[2] - b[2];
      return result;
    })
    .map(ele => ele[2]);
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(8, [4, 4, 4, 4, 4])); // [4, 1, 2, 3, 5, 6, 7, 8]
// https://programmers.co.kr/learn/courses/30/lessons/42889
