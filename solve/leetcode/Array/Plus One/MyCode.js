/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let answer = digits.join('');
  // 3번 테케 : 여기서 그냥 answer를 숫자로 바꾸고 +1을 하면
  // 범위가 너무 큰 숫자는 제대로 연산을 하지 못함
  // let answer = +digits.join(''); 이렇게 하면 안된다는 말임

  // 4번 테케 : 근데 또 밑에 4번 테스트케이스를 보면 9일 경우를 고려하는 로직이 필요함
  let endNum = 0;
  if (answer[answer.length - 1] === '9') {
    const newAnswer = [];
    for (let i = answer.length - 1; i >= 0; i--) {
      if (answer[i] === '9') newAnswer.unshift('0');
      else {
        newAnswer.unshift(...answer.slice(0, i + 1).split(''));
        newAnswer[i] = String(+newAnswer[i] + 1);
        break;
      }
    }
    if (newAnswer[0] === '0') newAnswer.unshift('1');
    answer = newAnswer.join('');
  } else endNum = +answer[answer.length - 1] + 1;

  answer = answer.slice(0, -1) + endNum;
  return String(answer).split('');
};

// test
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
console.log(plusOne([9, 9])); // [1, 0, 0]
console.log(plusOne([9, 8, 9])); // [9, 9, 0]
console.log(plusOne([8, 9, 9, 9])); // [9, 0, 0, 0]
console.log(plusOne([8, 9, 4, 5, 0, 0, 7, 9])); // [8, 9, 4, 5, 0, 0, 8, 0]
