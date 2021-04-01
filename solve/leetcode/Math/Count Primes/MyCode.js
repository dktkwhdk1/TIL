/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const checkPrime = [true, true];
  for (let i = 2; i < n; i++) {
    if (checkPrime[i]) continue;
    for (let j = 2 * i; j < n; j += i) {
      checkPrime[j] = true;
    }
  }
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (!checkPrime[i]) answer += 1;
  }
  return answer;
};

// Test
console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.log(countPrimes(2));
console.log(countPrimes(3));
