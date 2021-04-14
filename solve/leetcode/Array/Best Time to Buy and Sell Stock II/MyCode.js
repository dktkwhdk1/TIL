/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const price = prices[i + 1] - prices[i];
    if (price > 0) answer += price;
  }
  return answer;
};

// Test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 7, 2, 3, 6, 7, 6, 7])); //
