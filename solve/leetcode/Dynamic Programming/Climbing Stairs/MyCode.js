/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [0, 1, 2];

  // n = 2 -> 1+1 2 : 2
  // n = 3 -> 1+1+1 1+2 2+1 : 3
  // n = 4 -> 1+1+1+1 1+1+2 1+2+1 2+1+1 2+2 : 5
  // n = 5 -> 1+1+1+1+1 1+1+1+2 1+1+2+1 1+2+1+1 2+1+1+1 1+2+2 2+1+2 2+2+1 : 8

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// test
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
