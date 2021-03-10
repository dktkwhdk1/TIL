function solution(arr) {
  let max = Math.max(...arr);
  let i = 0;

  while (1) {
    i += 1;
    let start = max * i;
    let flag = true;
    for (let j = 0; j < arr.length; j++) {
      if (start % arr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return start;
  }
}

console.log(solution([2, 6, 8, 14])); // 168
// https://programmers.co.kr/learn/courses/30/lessons/12953
