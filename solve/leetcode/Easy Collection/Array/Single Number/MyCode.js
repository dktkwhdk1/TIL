/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};
  for (const num of nums) {
    if (!obj[num]) obj[num] = 0;
    obj[num] += 1;
  }
  for (const num in obj) {
    if (obj[num] === 1) return +num;
  }
};
