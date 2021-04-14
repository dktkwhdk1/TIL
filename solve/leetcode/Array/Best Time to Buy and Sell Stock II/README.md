## Problem Link

- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

<br />

## Solution

### Approach 1: Brute Force (Time Limit Exceeded)

In this case, we simply calculate the profit corresponding to all the possible sets of transactions and find out the maximum profit out of them.

```javascript
var maxProfit = function (prices) {
  return calculate(prices, 0);
};

var calculate = function (prices, s) {
  if (s >= prices.length) return 0;
  let max = 0;
  for (let start = s; start < prices.length; start++) {
    let maxprofit = 0;
    for (let i = start + 1; i < prices.length; i++) {
      if (prices[start] < prices[i]) {
        let profit = calculate(prices, i + 1) + prices[i] - prices[start];
        maxprofit = Math.max(maxprofit, profit);
      }
    }
    max = Math.max(max, maxprofit);
  }
  return max;
};
```

첫 번째 원소부터 시작해서 이 주식을 샀다고 가정하고 언제 팔아야 가장 이득인지를 계산한다. 결국 하루씩 지나가도 나보다 큰 가격이 나타나지 않으면 날 매수했을 때 최대 이득은 0으로 가정한다. 왜냐하면 매수를 안 하면 되는 거니까.

계산 과정 중 나보다 큰 가격을 발견했다면 과연 그 시점에 매도하는 것이 최선인지를 봐야 한다. 이때, 재귀적으로 또 다음날부터의 최대 이익을 계산하는 `calculate` 함수를 다시 호출하게 된다. 이렇게 모든 경우를 탐색하는 것이다.

즉, 첫날 7원은 모든 날 중 최댓값이므로 `max`가 0인 상태로 다음날로 넘어간다. 둘째 날 1원에 매수를 했다고 가정하면 바로 다음 날(셋째날)에 매도가 가능하고, calculate에 넷째 날(3)을 넣어서 호출한다. 이제 `calculate(prices, 3)`은 넷째 날부터의 최대 이익을 반환하는 함수가 되고, 또 바로 다음 날 매도가 가능하고, `calculate(prices, 5)`를 호출하지만, 결과는 0이다. 결국 `calculate(prices, 3)`은 3을 최종적으로 리턴하게 되고, 둘째 날 1원에 매수를 했다면 `calculate(prices, 3) + 5 - 1 = 7`이 최대 이익이 되고, 이 경우가 전체 경우 중 최대 이익이 된다.

문제를 보고, 완전 탐색으로 접근하면 무조건 시간 초과가 걸릴 것 같아서 다른 방법을 계속 생각했었는데 역시나 완전 탐색은 시간 초과가 나온다.

**Complexity Analysis**

- Time complexity: O(n<sup>n</sup>). Recursive function is called n<sup>n</sup> times.
- Space complexity: O(n). Depth of recursion is n.

<br />

### Approach 2: Peak Valley Approach

**Algorithm**

Say the given array is : `[7, 1, 5, 3, 6, 4]`. If we plot the numbers of the given array on graph, we get:

![image](https://user-images.githubusercontent.com/44192757/114680472-335ef780-9d48-11eb-9360-00e060e87266.png)

위 솔루션을 간단히 번역해보자면 그래프에서 나타난 것처럼 `peak`에서 `valley`를 뺀 값들을 모두 고려하여 다 더한 값이 최대 이익이 된다는 것이다. 왜냐하면 `C`는 항상 `A+B`보다 작기 때문이다.

```javascript
var maxProfit = function (prices) {
  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let maxprofit = 0;
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i += 1;
    }
    valley = prices[i];

    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i += 1;
    }
    peak = prices[i];
    maxprofit += peak - valley;
  }
  return maxprofit;
};
```

**Complexity Analysis**

- Time complexity : O(n). Single pass.
- Space complexity : O(1). Constant space required.

<br />

### Approach 3: Simple One Pass(MyCode.js)

This solution follows the logic used in Approach 2 itself, but with only a slight variation. In this case, instead of looking for every peak following a valley, we can simply go on crawling over the slope and keep on adding the profit obtained from every consecutive transaction. In the end,we will be using the peaks and valleys effectively, but we need not track the costs corresponding to the peaks and valleys along with the maximum profit, but we can directly keep on adding the difference between the consecutive numbers of the array if the second number is larger than the first one, and at the total sum we obtain will be the maximum profit. This approach will simplify the solution. This can be made clearer by taking this example:

[1, 7, 2, 3, 6, 7, 6, 7]

![image](https://user-images.githubusercontent.com/44192757/114681763-6a81d880-9d49-11eb-8aa2-7ce9c04af29f.png)

이 접근법이 내가 맨 처음 문제를 푼 코드와 완전히 동일했다. 사실 나도 코드를 작성하고 이게 과연 모든 경우를 다 만족할까? 하는 의문이 살짝 들긴 했는데 그래프를 보고 완벽하게 이해했다.

즉, 미리 미래의 가격을 모두 알고 있는 상황이기 때문에 내가 어떤 날에 매수를 했고, 다음 날 가격이 올랐다면 즉시 매도를 하고 다시 그 가격에 사는 방식이다. 1일에 매수를 했는데 2, 3일까지 계속 가격이 올랐다고 해도 1일에 매수하고 3일에 매도하나 1일에 매수, 2일에 매도, 2일에 매수, 3일에 매도하나 똑같다. 그래프의 A, B, C를 모두 더한 값은 결국 D와 같기 때문이라는 것이다.

```javascript
var maxProfit = function (prices) {
  let answer = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const price = prices[i + 1] - prices[i];
    if (price > 0) answer += price;
  }
  return answer;
};
```

**Complexity Analysis**

- Time complexity : O(n). Single pass.
- Space complexity: O(1). Constant space needed.
