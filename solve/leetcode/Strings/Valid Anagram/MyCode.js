/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const s_obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!s_obj[s[i]]) s_obj[s[i]] = 0;
    s_obj[s[i]] += 1;
  }
  const t_obj = {};
  for (let i = 0; i < t.length; i++) {
    if (!t_obj[t[i]]) t_obj[t[i]] = 0;
    t_obj[t[i]] += 1;
  }

  for (const key in s_obj) {
    if (!t_obj[key]) return false;
    if (s_obj[key] !== t_obj[key]) return false;
  }
  return true;
};

// 모든 문자가 서로 같고 개수도 같아야함
// sorting 해서 풀 수도 있네 맞네
// test
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aacc', 'ccac')); // false
