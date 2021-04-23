// https://programmers.co.kr/learn/courses/30/lessons/42883#

function solution(number, k) {
  const numbers = number.split('').map(val => +val);

  let count = numbers.length - k, // 몇 개를 골라야하나
    answer = '',
    start = 0,
    end = k + 1; // k가 아니라 k+1을 초기값으로 줘야한다! 내 for문은 < end 니까!

  while (count--) {
    let max = -1,
      maxIdx = 0;

    // count개를 고를 수 있는 최대범위 start ~ end 사이의 숫자 중 가장 큰 수를 골라줘야함
    for (let i = start; i < end; i++) {
      if (max < numbers[i]) {
        max = numbers[i];
        maxIdx = i;
      }
    }
    answer += max;

    start = maxIdx + 1;
    end = numbers.length - count + 1;
  }
  return answer;
}

// Test
console.log(solution('1924', 2)); // "94"
console.log(solution('4177252841', 4)); // "775841"
console.log(solution('1231234', 3)); // 3234
console.log(solution('00100', 2)); // 100
