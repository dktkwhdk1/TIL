/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let answer = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === str[j]) continue;
      answer = answer.slice(0, j);
      break;
    }
  }
  return answer;
};

// Test
// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
// console.log(longestCommonPrefix([])); // ""

var longestCommonPrefix2 = function (strs) {
  if (!strs.length) return '';
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix2(['flower', 'flow', 'fl'])); // "fl"
