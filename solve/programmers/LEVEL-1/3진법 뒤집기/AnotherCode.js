// 와 이게 뭐야...
const solution = n => {
  console.log(n.toString(2));
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

// 45를
// 1. toString(3)으로 n을 3진수 문자열로 변환 : '1200'
// 2. 변환된 3진수 문자열을 배열 안에 전개 연산자로 [1, 2, 0, 0] 펼침
// 3. 뒤집음 [0, 0, 2, 1]
// 4. join('')으로 문자열로 합침 : '0021'
// 5. parseInt('0021', 3)으로 다시 10진수로 변환 : 7

console.log(solution(45)); // 7
