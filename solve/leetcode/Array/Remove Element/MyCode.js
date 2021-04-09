// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 배열 안에 val인 요소들을 제거해야하는데, 단 새로운 배열을 만들지 않고
// 그냥 nums 안에서 해결해야한다. 어떻게 해야할까?
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  console.log(nums);
  return j;
};

var removeElement2 = function (nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

// Test
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
