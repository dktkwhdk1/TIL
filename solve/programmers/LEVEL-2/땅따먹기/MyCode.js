function solution(land) {
  for (let i = 0; i < land.length - 1; i++) {
    const [el1, el2, el3, el4] = land[i];
    for (let j = 0; j < 4; j++) {}
  }
  console.log(land);
  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [205, 6, 7, 200],
    [4, 3, 2, 1],
  ])
); // 213
