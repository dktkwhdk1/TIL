function solution(s) {
  return s
    .split(' ')
    .map(word => makeStrangeWord(word))
    .join(' ');
}

function makeStrangeWord(s) {
  return s
    .split('')
    .map((ele, idx) => (idx % 2 ? ele.toLowerCase() : ele.toUpperCase()))
    .join('');
}

console.log(solution('try hello world')); // TrY HeLlO WoRlD

// https://programmers.co.kr/learn/courses/30/lessons/12930
