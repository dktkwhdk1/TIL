function solution(progresses, speeds) {
  const answer = [];

  // 현재 배포해야되는 작업을 가리키는 인덱스
  let idx = 0;

  // 모두 배포할때까지 반복하는 while loop(1번의 loop는 하루가 지났다고 가정)
  while (idx <= progresses.length - 1) {
    let count = 0;
    // 만약 현재 가장 먼저 배포해야하는 작업이 완료되었다면
    // 그 다음 작업도 완료되었는지 idx를 증가시켜가며 확인
    while (progresses[idx] >= 100) {
      idx += 1;
      count += 1;
    }
    // 무언가 완료된 작업이 있으면 몇개가 완료되서 배포되었는지
    // count를 answer에 push
    if (count) answer.push(count);

    // 매일매일 각 작업에 속도를 더해준다
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
