function solution(s) {
  let binaryCount = 0;
  let zeroCount = 0;

  while (s !== '1') {
    const removeZero = s
      .split('')
      .filter(num => num === '1')
      .join('');

    let c = removeZero.length;
    zeroCount += s.length - c;

    s = getBinary(c);
    binaryCount += 1;
  }
  return [binaryCount, zeroCount];
}

function getBinary(c) {
  const binary = [];
  while (c) {
    binary.unshift(c % 2);
    c = parseInt(c / 2);
  }
  return binary.join('');
}

console.log(solution('110010101001')); // [3, 8]
console.log(solution('01110')); // [3, 3]
console.log(solution('1111111')); // [4, 1]
// https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
