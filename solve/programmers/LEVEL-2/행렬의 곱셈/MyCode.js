function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let result = 0;
      for (let k = 0; k < arr2.length; k++) {
        if (!answer[i]) answer[i] = [];
        result += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(result);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
// [
//   [15, 15],
//   [15, 15],
//   [15, 15],
// ];
// https://programmers.co.kr/learn/courses/30/lessons/12949
