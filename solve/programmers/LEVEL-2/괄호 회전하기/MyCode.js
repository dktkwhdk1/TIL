function solution(s) {
  // 주어진 문자열이 올바른 괄호 문자열이면 1부터 시작
  let answer = checkBracket(s) ? 1 : 0,
    result = '';
  for (let i = 1; i < s.length; i++) {
    result = s.slice(i) + s.slice(0, i);
    if (checkBracket(result)) answer += 1;
  }
  return answer;
}

// 올바른 괄호 문자열인지 확인하는 함수
function checkBracket(s) {
  const bracket = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
    else {
      if (stack[stack.length - 1] === bracket[s[i]]) stack.pop();
      else return false;
    }
  }
  return stack.length ? false : true;
}

console.log(solution('[](){}')); // 3
console.log(solution('}]()[{')); // 2
console.log(solution('[)(]')); // 0
console.log(solution('}}}')); // 0
// https://programmers.co.kr/learn/courses/30/lessons/76502
