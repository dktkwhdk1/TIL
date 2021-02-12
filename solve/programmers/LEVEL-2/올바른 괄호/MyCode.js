function solution(s) {
  const answer = [];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      answer[++top] = s[i];
    } else {
      if (answer[top] === '(') {
        answer.pop();
        top -= 1;
      } else return false;
    }
    console.log(answer, top);
  }
  if (top !== -1) return false;
  return true;
}

const s = '(())()';
console.log(solution(s)); // true
