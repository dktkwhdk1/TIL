/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let current = 0,
    max = 0;
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      current = Math.min(i - obj[s[i]], current + 1);
    } else current += 1;
    max = Math.max(max, current);
    obj[s[i]] = i;
    //console.log('obj : ', obj, 'max : ', max, 'current : ', current);
  }
  return max;
};

// test
console.log(lengthOfLongestSubstring('abcdefghijklmnolpqrf')); // 15
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
