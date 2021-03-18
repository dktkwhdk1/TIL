/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const shuffleArr = [...this.nums];
  for (let i = 0; i < this.nums.length; i++) {
    let r = randomInt(i, this.nums.length - 1);
    let numToSwap = shuffleArr[r];
    shuffleArr[r] = shuffleArr[i];
    shuffleArr[i] = numToSwap;
  }
  return shuffleArr;

  function randomInt(min, max) {
    return Math.floor(Math.random(min, max) * (max - min + 1) + min);
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
