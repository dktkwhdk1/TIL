/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const code0 = '0'.charCodeAt();
  const code9 = '9'.charCodeAt();
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (result[0]) break; // 숫자나 +,-기호가 들어있는데 공백이 나오면 안됨
      continue;
    }
    if (s[i] === '-' || s[i] === '+') {
      if (result[0]) break; // 중간에 기호가 있으면 안됨
      result.push(s[i]);
      continue;
    }
    const code = s[i].charCodeAt();
    if (code < code0 || code9 < code) break;
    result.push(s[i]);
  }
  const answer = +result.join('');
  if (!answer) return 0; // 기호만 들어있을수도 있음
  if (answer < (-2) ** 31) return (-2) ** 31;
  if (answer > 2 ** 31 - 1) return 2 ** 31 - 1;
  return answer;
};

// test
console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('  0000000000012345678')); // 12345678

// fail
console.log(myAtoi('+-12')); // 0
console.log(myAtoi('-+12')); // 0
console.log(myAtoi('00000-42a1234')); // 0

console.log(myAtoi('   +0 123')); // 0
console.log(myAtoi('  +  413')); // 0
