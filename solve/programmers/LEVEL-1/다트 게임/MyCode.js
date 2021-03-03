function solution(dartResult) {
  const resultArr = dartResult.split('');
  const score = [];
  while (resultArr.length) {
    let current = resultArr.shift();
    if (current === '1' && resultArr[0] === '0') {
      current += resultArr.shift();
    }

    let sdt = resultArr.shift();
    switch (sdt) {
      case 'S':
        current = +current;
        break;
      case 'D':
        current = Number(current) ** 2;
        break;
      case 'T':
        current = Number(current) ** 3;
        break;
      default:
        break;
    }
    score.push(current);

    let option = '';
    if (resultArr[0] === '*' || resultArr[0] === '#') {
      option = resultArr.shift();
    }
    if (option === '*') {
      for (let i = score.length - 1; i >= score.length - 2; i--) {
        score[i] *= 2;
      }
    }
    if (option === '#') {
      score[score.length - 1] *= -1;
    }
  }
  return score.reduce((acc, cur) => acc + cur);
}

console.log(solution('1S2D*3T')); // 37 (1^1 * 2 + 2^2 * 2 + 3^3)
// https://programmers.co.kr/learn/courses/30/lessons/17682
