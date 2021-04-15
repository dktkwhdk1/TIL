/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  const result = countAndSay(n - 1);

  let answer = '',
    count = 1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[i + 1]) {
      answer += count + result[i];
      count = 1;
    } else count += 1;
  }
  return answer;
};

// Test
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"
