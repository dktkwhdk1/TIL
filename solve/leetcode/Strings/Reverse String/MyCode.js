/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (i <= j) break;
    const temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    j += 1;
  }
  return s;
};

// test
console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]

// 솔루션이 매우 흥미롭다.
