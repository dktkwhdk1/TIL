// O(N) 도전중
function solution(stones, k) {
  let sum = stones.slice(0, k).reduce((acc, cur) => acc + cur),
    answer = sum,
    start = 0,
    end = 0;

  for (let i = 0; i < stones.length - k; i++) {
    sum -= stones[i];
    sum += stones[i + k];
    if (answer > sum) {
      answer = sum;
      start = i + 1;
      end = i + k + 1;
    }
  }
  return stones.slice(start, end).sort((a, b) => b - a)[0];
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3

function solution2(stones, k) {
  let answer = 0,
    left = 1,
    right = stones.slice().sort((a, b) => b - a)[0];
  // right = Math.max(...stones) 이건 왜 런타임 에러가 나지 -> 이유 찾았음

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (check(stones, k, mid)) {
      left = mid + 1;
      answer = Math.max(answer, mid);
    } else right = mid - 1;
  }
  return answer;
}

function check(stones, k, mid) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < mid) {
      count += 1;
      if (count >= k) return false;
    } else count = 0;
  }
  return true;
}

// console.log(solution2([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
