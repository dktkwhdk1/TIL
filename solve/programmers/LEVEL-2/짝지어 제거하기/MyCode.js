// function solution(s) {
//   const arr = s.split('');
//   while (arr.length) {
//     let flag = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 2);
//         flag = true;
//       }
//     }
//     if (!flag) break;
//   }
//   if (arr.length) return 0;
//   return 1;
// }
// 시간초과 로직

function solution(s) {
  const arr = s.split('');
  const prevArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      const prev = prevArr[prevArr.length - 1];
      if (prev === arr[i]) {
        prevArr.pop();
      } else {
        prevArr.push(arr[i]);
      }
    } else i += 1;
  }
  return prevArr.length ? 0 : 1;
}

console.log(solution('kbaabaaccdeeffdzzk'));
// https://programmers.co.kr/learn/courses/30/lessons/12973
