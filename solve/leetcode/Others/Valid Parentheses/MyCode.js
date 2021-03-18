/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.unshift(s[i]);
    } else {
      if (!stack[0]) return false;
      if (s[i] === ')') {
        if (stack[0] !== '(') return false;
      } else if (s[i] === '}') {
        if (stack[0] !== '{') return false;
      } else {
        if (stack[0] !== '[') return false;
      }
      stack.shift();
    }
  }
  if (stack[0]) return false;
  return true;
};

// test
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('(')); // false
