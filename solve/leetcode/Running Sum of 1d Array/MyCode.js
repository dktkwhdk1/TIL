/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const arr = [];
  nums.reduce((acc, cur) => {
    arr.push(acc + cur);
    return acc + cur;
  }, 0);
  return arr;
};

var runningSum2 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

console.log(runningSum2([1, 2, 3, 4])); // [1, 3, 6, 10]
