## Problem Link

- https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

<br />

## Solution

### Approach 1: Brute Force (MyCode.js)

```javascript
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }
};
```

**Complexity Analysis**

- Time complexity : O(n<sup>2</sup>).
- Space complexity : O(1).

<br />

### Approach 2: Two-pass Hash Table

To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.

A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration we check if each element's complement (target - nums[i]target−nums[i]) exists in the table. Beware that the complement must not be nums[i]nums[i] itself!

```javascript
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in obj && obj[complement] !== i) {
      return [i, obj[complement]];
    }
  }
};
```

입력받은 nums 배열을 객체에 `값: 인덱스`로 매핑하고 다시 nums 배열의 원소들을 하나씩 확인하면서 타겟에서 그 값을 뺀 값이 객체에 존재한다면 그 경우가 정답인 경우이다. nums 안에 똑같은 값이 있어도 현재 확인하고 있는 값의 인덱스가 아닌 경우에만 리턴하도록 조건을 작성하면 올바른 답을 찾을 수 있다.

<br />

**Complexity Analysis**

- Time complexity : O(n).
- Space complexity : O(n).

<br />

### Approach 3: One-pass Hash Table

It turns out we can do it in one-pass. While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.

```javascript
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in obj) {
      return [obj[complement], i];
    }
    obj[nums[i]] = i;
  }
};
```

`Approach 2`와 거의 유사한 방법이지만 for loop를 한 번만 돌면서 처리한다. 객체에 값과 인덱스를 매핑하기 전에 먼저 타겟에서 현재 값을 뺀 값이 있는지 확인하고, 있다면 그 즉시 정답으로 간주하고 리턴하는데 대신 이번에는 i가 먼저가 아니라 이미 객체에 들어가 있는 값의 인덱스를 먼저 배열에 담아서 리턴해야한다.

<br />

**Complexity Analysis**

- Time complexity : O(n). We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.

- Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
