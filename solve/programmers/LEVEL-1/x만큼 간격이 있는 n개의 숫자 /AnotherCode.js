function solution1(x, n) {
  return [...Array(n).keys()].map(v => (v + 1) * x);
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// 와...
