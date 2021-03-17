/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// test
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1, 0, 0, 1, 2, 2, 3, 3, 3]

// fail
console.log(merge([-1, 0, 1, 1, 0, 0, 0, 0, 0], 4, [-1, 0, 2, 2, 3], 5)); // [-1, -1, 0, 0, 1, 1, 2, 2, 3]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]
