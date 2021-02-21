function solution(s) {
  if (!s.length) return '';
  const words = s.split(' ');
  const answer = [];
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    if (!current) answer.push('');
    else answer.push(current[0].toUpperCase() + current.slice(1).toLowerCase());
  }
  return answer.join(' ');
}

console.log(solution(' aA bbbB Cccc '));
// https://programmers.co.kr/learn/courses/30/lessons/12951
