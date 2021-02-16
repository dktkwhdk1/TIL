function solution(n) {
  const checkPrime = [true, true];
  // 에라토스테네스의 체
  for (let i = 2; i <= n; i++) {
    if (checkPrime[i]) continue;

    for (let j = 2 * i; j <= n; j += i) {
      checkPrime[j] = true;
    }
  }
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!checkPrime[i]) answer += 1;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12921
