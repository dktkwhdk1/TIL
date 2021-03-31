// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    // 문제에서 제시해준 6가지 경우를 추가한다.
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  return s
    .split('') // 배열로 바꾸고
    .map((el, idx, arr) => {
      // 배열을 [1000, 0, 900, 0, 90, 0, 4] 이런식으로 바꾼다(마지막 테스트 케이스)
      const next = arr[idx + 1];
      if (el === 'I') {
        if (next === 'V' || next === 'X') {
          arr[idx + 1] = el + next;
          return 0;
        }
      } else if (el === 'X') {
        if (next === 'L' || next === 'C') {
          arr[idx + 1] = el + next;
          return 0;
        }
      } else if (el === 'C') {
        if (next === 'D' || next === 'M') {
          arr[idx + 1] = el + next;
          return 0;
        }
      }
      return symbol[el];
    })
    .reduce((acc, cur) => acc + cur); // 마지막에 배열의 원소를 다 더한값을 리턴
};

// Test
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
