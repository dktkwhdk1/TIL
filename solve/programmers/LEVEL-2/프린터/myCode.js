function solution(priorities, location) {
  let stack = [];
  for (let i = 0; i < priorities.length; i++) {
    stack.push([priorities[i], i]);
  }
  let answer = 1;
  while (1) {
    const [value, index] = stack.shift();
    let flag = true;
    for (let i = 0; i < stack.length; i++) {
      if (value < stack[i][0]) {
        stack.push([value, index]);
        flag = false;
        break;
      }
    }
    if (flag) {
      if (value === priorities[location] && location === index) {
        return answer;
      }
      answer += 1;
    }
  }
}
