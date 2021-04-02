function solution(s) {
  const arr = [];
  let idx = -1;
  let number = '';
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '{') {
      idx += 1;
      continue;
    }
    if (s[i] === ',') {
      if (s[i + 1] === '{') continue;
      if (!arr[idx]) arr[idx] = [];
      arr[idx].push(+number);
      number = '';
    } else if (s[i] === '}') {
      if (!arr[idx]) arr[idx] = [];
      arr[idx].push(+number);
      number = '';
    } else number += s[i];
  }
  arr.sort((a, b) => a.length - b.length);

  const answer = new Set();
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    for (let j = 0; j < value.length; j++) {
      answer.add(value[j]);
    }
  }
  return Array.from(answer);
}

// Test
console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]
console.log(solution('{{123}}')); // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); // [3, 2, 4, 1]

// https://programmers.co.kr/learn/courses/30/lessons/64065
