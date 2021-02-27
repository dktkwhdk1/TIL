function solution(n) {
  function getCountOfOne(num) {
    let rest = 0;
    let countOfone = 0;
    while (num) {
      rest = num % 2;
      if (rest) countOfone += 1;
      num = parseInt(num / 2);
    }
    return countOfone;
  }
  const temp = getCountOfOne(n);
  while (1) {
    if (temp === getCountOfOne(n + 1)) return n + 1;
    else n += 1;
  }
}

console.log(solution(78)); // 83
// https://programmers.co.kr/learn/courses/30/lessons/12911
