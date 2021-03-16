/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt();

    if ((48 <= code && code <= 57) || (97 <= code && code <= 122)) {
      arr.push(s[i]);
    }
  }
  let j = arr.length - 1;
  let answer = true;
  for (let i = 0; i < arr.length; i++) {
    if (j <= i) break;
    if (arr[i] !== arr[j]) {
      answer = false;
      break;
    }
    j -= 1;
  }
  return answer;
};

// test
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
