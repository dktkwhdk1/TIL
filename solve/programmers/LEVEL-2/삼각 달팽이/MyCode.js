function solution(n) {
  const answer = [];
  let number = 1; // 시작 숫자

  // 이차원 배열 answer의 각각 행과 열을 가리키는 인덱스
  let r = -1,
    c = 0;

  // 1 ~ n까지 (피라미드)층 수만큼 loop
  for (let i = 1; i <= n; i++) {
    // 예를 들어, 4층이면 처음(i=1)에는 4번, 두 번째(i=2)에는 3번, 세 번째(i=3)에는 2번...
    // 반복해야하므로 j=0 ~ j=n-i까지 loop
    for (let j = 0; j <= n - i; j++) {
      // 아래로 내려가거나, 오른쪽으로 가거나, 위로 올라가거나 3가지 방향이 있을 수 있으므로
      // 3으로 나눈 나머지를 기준삼아 각각 다음 행과 다음 열을 결정했다.
      if (i % 3 === 1) r += 1;
      else if (i % 3 === 2) c += 1;
      else {
        r -= 1;
        c -= 1;
      }
      if (!answer[r]) answer[r] = [];
      answer[r][c] = number;
      number += 1;
    }
  }
  console.log(answer);
  /*
    [
      [ 1 ],
      [ 2, 15 ],
      [ 3, 16, 14 ],
      [ 4, 17, 21, 13 ],
      [ 5, 18, 19, 20, 12 ],
      [ 6,  7,  8,  9, 10, 11 ]
    ]
   */
  return answer.flat();
}

console.log(solution(6));
// [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11];
