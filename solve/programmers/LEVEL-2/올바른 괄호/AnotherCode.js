function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? count++ : count--;
    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true;
}

// https://www.zerocho.com/category/Algorithm/post/5b7bf396b35bf5001b940dc5
