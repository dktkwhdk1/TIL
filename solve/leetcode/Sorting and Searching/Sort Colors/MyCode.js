/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = 3,
      minIdx = 0;
    for (let j = i; j < nums.length; j++) {
      if (min > nums[j]) {
        min = nums[j];
        minIdx = j;
      }
    }
    nums[minIdx] = nums[i];
    nums[i] = min;
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
