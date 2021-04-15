function solution(expression) {
  const order = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  let answer = 0;
  for (let i = 0; i < order.length; i++) {
    const operators = getOperators(expression);
    const nums = getNumbers(expression);

    for (let j = 0; j < order[i].length; j++) {
      for (let k = 0; k < operators.length; k++) {
        const operator = operators[k];
        if (operator === order[i][j]) {
          if (operator === '+') {
            nums[k] += nums[k + 1];
          } else if (operator === '*') {
            nums[k] *= nums[k + 1];
          } else {
            nums[k] -= nums[k + 1];
          }
          nums.splice(k + 1, 1);
          operators.splice(k, 1);
          k -= 1;
        }
      }
    }
    if (Math.abs(nums[0]) >= answer) {
      answer = Math.abs(nums[0]);
    }
  }
  return answer;
}

// expression에서 숫자만 쏙 빼서 담은 배열을 리턴
function getNumbers(expression) {
  const nums = [];
  let number = '';
  for (const val of expression) {
    if (val === '+' || val === '-' || val === '*') {
      nums.push(+number);
      number = '';
    } else number += val;
  }
  nums.push(+number);
  return nums;
}

// expression에서 연산자만 쏙 빼서 담은 배열을 리턴
function getOperators(expression) {
  const operator = [];
  for (const val of expression) {
    if (val === '+' || val === '-' || val === '*') {
      operator.push(val);
    }
  }
  return operator;
}

console.log(solution('100-200*300-500+20')); // 60420
console.log(solution('50*6-3*2')); // 300
// https://programmers.co.kr/learn/courses/30/lessons/67257
