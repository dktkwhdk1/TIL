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

function solution2(numbers) {
  const primes = getPrimeNumbers(numbers);

  let check = Array(numbers.length).fill(false);
  let answer = 0;
  let map = new Map();

  const result = [];
  function pick(idx, max) {
    if (idx === max) {
      if (result[0] === '0') return;
      const number = result.join('');
      if (!primes[number] && !map.has(number)) {
        map.set(number, true);
        answer += 1;
      }
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!check[i]) {
        check[i] = true;
        result.push(numbers[i]);
        pick(i + 1, max);
        result.pop();
        check[i] = false;
      }
    }
  }
  for (let i = 1; i <= numbers.length; i++) {
    pick(0, i);
    check = Array(numbers.length).fill(false);
  }
  return answer;
}

function getPrimeNumbers(numbers) {
  const max = +numbers
    .split('')
    .map(val => +val)
    .sort((a, b) => b - a)
    .join('');
  const primes = [true, true];

  for (let i = 2; i <= max; i++) {
    if (primes[i]) continue;
    for (let j = 2 * i; j <= max; j += i) {
      primes[j] = true;
    }
  }
  return primes;
}
