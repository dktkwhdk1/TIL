/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = []; // dp[n] : 길이가 n인 배열에서 가장 긴 증가하는 부분 배열의 길이
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1); // 크....
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
