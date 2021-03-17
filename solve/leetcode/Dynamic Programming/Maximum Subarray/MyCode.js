/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 배열의 연속된 최대 부분합을 구하는 문제

  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]로 예를 들면,
  // dp[i] => i번째 수로 끝나는 최대 연속합
  // - dp[0]은 당연히 nums[0]이다.
  // - dp[1]은 -2+1 혹은 1이므로 1이다.
  // - dp[2]는 -2+1-3 혹은 1-3 혹은 -3이므로 -2이다.
  // - dp[3]은 -2+1-3+4 혹은 1-3+4 혹은 -3+4 혹은 4이므로 4이다.
  // ...

  // 즉, dp[i - 1]의 값은 i-1번째 수로 끝나는 가장 큰 연속합을 나타내고 있으므로
  // dp[i]의 값을 결정할 때, nums[i]와 dp[i - 1] + nums[i]의 값을 비교해서 큰 값을 저장하면 된다.

  // nums[i]부터 새로운 연속합이 시작되는 것이 좋으냐, i-1번째 수까지의 연속합과
  // nums[i]가 연속되는 것이 좋으냐를 판단하는 것이다.

  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};

// test
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([1])); // 1
