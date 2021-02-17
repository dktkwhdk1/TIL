function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map(el => +el);
}

console.log(solution(12345)); // [5, 4, 3, 2, 1]
