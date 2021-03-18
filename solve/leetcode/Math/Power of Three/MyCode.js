// Follow up: Could you solve it without loops/recursion?
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (!n) return false;
  if (n === 1) return true;

  while (n !== 1) {
    if (n % 3 === 0) n /= 3;
    else return false;
  }
  return true;
};

// test
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
