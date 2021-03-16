/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// I agree!!!!!!
/**
 * A particularly poorly worded and poorly described problem. My implementation in Python correctly altered the nums input, and correctly returns the length of nums. I specifically printed my nums array before returning and it showed the correct expected output, yet the Judge kept showing a different output. Very strange.
 * how did this solution remove duplicates? Looks like it just change first length of n to unique value.
 */
