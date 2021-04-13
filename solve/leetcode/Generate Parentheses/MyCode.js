/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [],
    answer = [],
    parenthesis = ['(', ')'];

  // 괄호를 2*n개만큼 골라서 올바른 괄호이면 answer에 push
  function getResult(pick) {
    if (pick === n * 2) {
      if (checkParentheses(result.join(''))) {
        answer.push(result.join(''));
      }
      return;
    }
    for (let i = 0; i < 2; i++) {
      result.push(parenthesis[i]);
      getResult(pick + 1);
      result.pop();
    }
  }
  getResult(0, 0);
  return answer;
};

// 올바른 괄호 쌍인지 확인하는 함수
function checkParentheses(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') count += 1;
    else count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}

// Test
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
