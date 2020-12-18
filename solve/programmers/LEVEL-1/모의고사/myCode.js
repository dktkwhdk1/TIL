function solution(answers) {
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (supo1[i % supo1.length] === answers[i]) cnt1++;
    if (supo2[i % supo2.length] === answers[i]) cnt2++;
    if (supo3[i % supo3.length] === answers[i]) cnt3++;
  }
  let answer = [];
  let max = Math.max(cnt1, cnt2, cnt3);
  if (max === cnt1) answer.push(1);
  if (max === cnt2) answer.push(2);
  if (max === cnt3) answer.push(3);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
