/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Solution 4 : Greedy
var canJump4 = function (nums) {
  let target = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  return target === 0;
};

// Solution 3 : Dynamic Programming Bottom-up
var canJump = function (nums) {
  const memo = Array(nums.length).fill('UNKNOWN');
  memo[memo.length - 1] = 'GOOD';

  for (let i = nums.length - 2; i >= 0; i--) {
    let furthestJump = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j] === 'GOOD') {
        memo[i] = 'GOOD';
        break;
      }
    }
  }

  return memo[0] === 'GOOD';
};

// Test
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
