/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let max = amount + 1;
  const dp = Array(amount + 1).fill(max);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

// Test
console.log(coinChange([1, 2, 5], 11)); // 3
// 1을 만드는데 최소 개수 1 => 1
// 2를 만드는데 최소 개수 1+1, 2 => 1
// 3을 만드는데 최소 개수 1+1+1, 1+2 => 2
// 4를 만드는데 최소 개수 1+1+1+1, 1+1+2, 2+2 => 2
// 5를 만드는데 최소 개수 1+1+1+1+1, 1+1+1+2, 1+2+2, 5 => 1

// 6을 만드는데 최소 개수 min(6-1=5, 6-2=4, 6-5=1) => 2
// 7을 만드는데 최소 개수 min(7-1=6, 7-2=5, 7-5=2) => 2
// ...

console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2

console.log(coinChange([186, 419, 83, 408], 6249)); // 20

// solution 2
var coinChange = function (coins, amount) {
  const amounts = Array(amount + 1).fill(0);
  let result = recur(coins, amounts, amount);

  return result > amount ? -1 : result;
};

function recur(coins, amounts, amount) {
  if (amount < 0) return 3000000000;
  if (amount === 0) return 0;
  if (amounts[amount] > 0) return amounts[amount];

  let min = 3000000000;
  for (let i = 0; i < coins.length; i++) {
    min = Math.min(min, recur(coins, amounts, amount - coins[i]) + 1);
  }

  return (amounts[amount] = min);
}
