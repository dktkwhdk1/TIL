/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) answer += 1;
    }
  }
  return answer;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
