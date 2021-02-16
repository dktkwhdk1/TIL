function solution(s) {
  if (s.length % 2) return s.slice(s.length / 2, s.length / 2 + 1);
  return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
