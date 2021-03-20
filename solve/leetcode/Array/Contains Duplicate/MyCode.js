/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const check = {};
  for (let i = 0; i < nums.length; i++) {
    if (!check[nums[i]]) check[nums[i]] = 1;
    else return true;
  }
  return false;
};
