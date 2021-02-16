function solution(numbers) {
  const checkPrime = [true, true];
  const maxNumber = +numbers
    .split('')
    .map(el => +el)
    .sort((a, b) => b - a)
    .join('');
  for (let i = 2; i <= maxNumber; i++) {
    if (checkPrime[i]) continue;
    for (let j = 2 * i; j <= maxNumber; j += i) {
      checkPrime[j] = true;
    }
  }
  const numArr = numbers.split('').map(el => +el);
  const checkPick = [];
  const result = [];
  const answer = [];

  function makeNumber(idx, max) {
    if (idx === max) {
      const areYouPrime = +result.join('');
      if (!checkPrime[areYouPrime] && !answer.includes(areYouPrime)) {
        answer.push(areYouPrime);
      }
      return;
    }
    for (let i = 0; i < numArr.length; i++) {
      if (!checkPick[i]) {
        checkPick[i] = true;
        result.push(numArr[i]);
        makeNumber(idx + 1, max);
        result.pop();
        checkPick[i] = false;
      }
    }
  }
  for (let i = 1; i <= numArr.length; i++) {
    makeNumber(0, i, 0);
  }
  return answer.length;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2
