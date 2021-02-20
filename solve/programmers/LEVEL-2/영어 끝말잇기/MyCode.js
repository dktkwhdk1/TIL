function solution(n, words) {
  const answer = [];
  let who = 2;
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const current = words[i];

    if (prev[prev.length - 1] !== current[0] || words.indexOf(current) !== i) {
      answer.push(who);
      answer.push(Math.floor(i / n) + 1);
      break;
    }
    who === n ? (who = 1) : (who += 1);
  }
  return answer[0] ? answer : [0, 0];
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);
// https://programmers.co.kr/learn/courses/30/lessons/12981
