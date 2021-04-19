/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  for (let i = 0; i < s.length - 1; i++) {
    for (
      let left = i, right = s.length - 1;
      left >= 0, right >= s.length - 1 - i;
      left--, right--
    ) {
      if (isPalindrome(s, left, right)) return s.slice(left, right + 1);
    }
  }
  return s[0];
};

function isPalindrome(s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

// Test
console.log(longestPalindrome('babad')); // "bab" or "aba"
console.log(longestPalindrome('cbbd')); // "bb"
console.log(longestPalindrome('a')); // "a"
console.log(longestPalindrome('ac')); // "a"

// i = 0 / left = 0 / right = s.length - 1

// i = 1 / left = 1 / right = s.length - 1
//         left = 0 / right = s.length - 2

// i = 2 / left = 2 / right = s.length - 1
//         left = 1 / right = s.length - 2
//         left = 0 / right = s.length - 3
//                 ...
//                 ...
