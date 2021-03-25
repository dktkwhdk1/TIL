function solution(n) {
  const number = getNumber(n);
  let answer = 0,
    mul = 1;

  for (let i = number.length - 1; i >= 0; i--) {
    if (number[i] !== '0') {
      answer += Number(number[i]) * mul;
    }
    mul *= 3;
  }
  return answer;
}

// n을 뒤집은 3진법 문자열로 만들어 리턴하는 함수
function getNumber(n) {
  const number = [];
  while (n) {
    number.push(n % 3);
    n = parseInt(n / 3);
  }
  return number.join('');
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
// https://programmers.co.kr/learn/courses/30/lessons/68935
