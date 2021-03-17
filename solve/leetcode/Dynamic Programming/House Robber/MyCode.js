/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) sum1 = Math.max(sum1 + nums[i], sum2);
    else sum2 = Math.max(sum2 + nums[i], sum1);
  }
  return Math.max(sum1, sum2);
};

// test
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12

console.log(rob([2, 1, 1, 2])); // 4
