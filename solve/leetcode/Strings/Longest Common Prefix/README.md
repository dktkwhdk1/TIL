## Problem Link

- https://leetcode.com/problems/longest-common-prefix/

<br />

## Solution

### Approach 1: Horizontal scanning(MyCode.js)

```javascript
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let answer = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === str[j]) continue;
      answer = answer.slice(0, j);
      break;
    }
  }
  return answer;
};
```

### Approach 2: Vertical scanning

```javascript
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};
```

첫 번째 원소의 알파벳 하나하나를 두 번째 원소부터 시작하여 비교해 나간다. 만약 첫 번째 스트링의 해당 알파벳이 어떤 원소와 하나라도 맞지 않거나, 가장 작은 원소의 길이를 발견(두 번째 알파벳을 확인 중(i=1)인데 어떤 스트링의 길이가 1이면 바로 리턴)하면 정답이므로 리턴한다.
