function solution(msg) {
  // [1] : 압축 시작 전 사전 정의
  const dictionary = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const answer = [];

  // [2] : 처음에는 사전에서 현재 입력과 일치하는 가장 긴 문자열은 msg[0]이다.
  // [3] : w에 해당하는 사전의 색인 번호를 wnum에 저장한다.
  let wnum = dictionary.indexOf(msg[0]);
  let cnum = dictionary.indexOf(msg[1]);

  // 만약 msg가 1글자거나 2글자면 그냥 [wnum], [wnum, cnum]를 리턴한다.
  if (msg.length === 1) return [wnum];
  if (msg.length === 2) return [wnum, cnum];

  // [4] : w + c에 해당하는 단어를 사전에 등록한다.
  dictionary.push(msg[0] + msg[1]);
  answer.push(wnum); // [3번] : w에 해당하는 사전 색인 번호를 출력한다.

  // 이제 두 번째 글자부터 msg의 끝까지 loop를 돈다.
  for (let i = 1; i < msg.length; i++) {
    let c = msg[i + 1];

    // [2] : 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾기 위해
    // slice()를 통해 현재 인덱스부터 제일 긴 문자열부터 순서대로 줄이면서 비교한다.
    for (let j = msg.length; j > i; j--) {
      wnum = dictionary.indexOf(msg.slice(i, j));
      if (wnum === -1) continue;
      if (wnum !== -1) {
        // [3] : w에 해당하는 사전 색인 번호를 출력하고
        answer.push(wnum);
        if (j - i > 1) {
          // 다음 글자(c)를 지정해주고
          c = msg[j];
          // 현재 인덱스를 j-i-1 만큼 늘려줌으로써 입력에서 w를 제거한다.
          i += j - i - 1;
        }
        // [5] : 압축과정 2번으로 돌아간다.
        break;
      }
    }
    // [4] : 돌아가기 전에 c가 남아있으면 w+c 단어를 사전에 등록한다.
    if (c) dictionary.push(dictionary[wnum] + c);
  }
  return answer;
}

console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution('ABABABABABABABAB')); // [1, 2, 27, 29, 28, 31, 30]
// https://programmers.co.kr/learn/courses/30/lessons/17684
