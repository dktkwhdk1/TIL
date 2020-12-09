const LSCS = function (arr) {
  let dp = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }
  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    max = Math.max(dp[i], max);
  }
  return max;
};
