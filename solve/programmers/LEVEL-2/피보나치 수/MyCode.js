function solution(n) {
  const fibonacci = [0, 1];

  // fibonacci 배열에 2부터 n까지의 모든 피보나치 수를 저장 후 n번째 피보나치 수 리턴
  for (let i = 2; i <= n; i += 1) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }
  return fibonacci[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5

/* n의 범위로 인해 당연히 시간초과

function solution(n) {
  return getFibonacci(n) % 1234567;
}

function getFibonacci(n) {
  if (!n) return 0;
  if (n === 1) return 1;
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}
*/
// https://programmers.co.kr/learn/courses/30/lessons/12945
