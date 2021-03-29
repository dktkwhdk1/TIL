function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    dp[i] %= 1000000007;
  }
  return dp[n];
}

console.log(solution(4)); // 5

/**
 * 1 -> 1
 * 2 -> 2
 * 3 -> 3
 * 4 -> 5
 * 5 -> 8
 */
