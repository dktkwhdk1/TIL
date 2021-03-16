/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let answer = String(x).split('').reverse().join('');
  let idx = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== '0') {
      idx = i;
      break;
    }
  }
  answer = answer.slice(idx);
  if (x < 0) {
    answer = +answer.slice(0, -1);
    if (answer > 2 ** 31 - 1) return 0;
    return -answer;
  }
  return +answer;
};

// test
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
