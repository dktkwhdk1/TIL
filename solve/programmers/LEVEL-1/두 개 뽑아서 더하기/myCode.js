function solution(numbers) {
  var answer = [];
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let result = numbers[i] + numbers[j];
      if (obj[result] === undefined) {
        answer.push(result);
        obj[result] = 1;
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
