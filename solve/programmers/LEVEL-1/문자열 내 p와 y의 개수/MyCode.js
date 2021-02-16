function solution(s) {
  s = s.toLowerCase();
  let count = 0;
  for (const char of s) {
    if (char === 'p') count += 1;
    if (char === 'y') count -= 1;
  }
  if (count) return false;
  return true;
}
