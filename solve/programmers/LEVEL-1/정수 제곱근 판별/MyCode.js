function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i ** 2 === n) return (i + 1) ** 2;
  }
  return -1;
}

console.log(solution(121)); // 144
