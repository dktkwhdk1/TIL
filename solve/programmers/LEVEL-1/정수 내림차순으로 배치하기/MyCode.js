function solution(n) {
  return +String(n)
    .split('')
    .map(ele => +ele)
    .sort((a, b) => b - a)
    .join('');
}
