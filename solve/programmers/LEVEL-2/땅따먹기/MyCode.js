function solution(land) {
  for (let i = 0; i < land.length - 1; i++) {
    const [el1, el2, el3, el4] = land[i];
    const [nextEl1, nextEl2, nextEl3, nextEl4] = land[i + 1];
    for (let j = 0; j < 4; j++) {
      if (j === 0)
        land[i + 1][j] = Math.max(nextEl1 + el2, nextEl1 + el3, nextEl1 + el4);
      if (j === 1)
        land[i + 1][j] = Math.max(nextEl2 + el1, nextEl2 + el3, nextEl2 + el4);
      if (j === 2)
        land[i + 1][j] = Math.max(nextEl3 + el1, nextEl3 + el2, nextEl3 + el4);
      if (j === 3)
        land[i + 1][j] = Math.max(nextEl4 + el1, nextEl4 + el2, nextEl4 + el3);
    }
  }
  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [205, 6, 7, 200],
    [4, 3, 2, 1],
  ])
); // 213
