/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = 1000000;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    // min에는 지금까지 찾은 가장 작은 값을 넣는다.
    if (prices[i] < min) min = prices[i];
    // 만약 현재 값에서 min을 뺀 값이 max보다 크다면 더 큰 이익을 볼 수 있다는 뜻이고
    // max를 그 값으로 바꾼다.
    // 만약 min에 3번째 테스트케이스처럼 뒤에서 찾은 1이 들어간다 해도
    // 그 이후에 prices[i] - 1이 앞서 max에 담긴 1보다 큰 경우가 없으므로
    // 최종적으로 1을 리턴하게 된다.
    else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

// test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

console.log(maxProfit([7, 2, 3, 1, 1, 1])); // 1

// Brute Force
var maxProfit2 = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let price = prices[j] - prices[i];
      if (max < price) {
        max = price;
      }
    }
  }
  return max;
};
