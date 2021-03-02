function solution(x) {
  const sum = String(x)
    .split('')
    .reduce((acc, cur) => +acc + +cur, 0);
  return x % sum ? false : true;
}

console.log(solution(10)); // true
// https://programmers.co.kr/learn/courses/30/lessons/12947
