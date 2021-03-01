function hopscotch(board, size) {
  const final = board.reduce((scores, row) => {
    const newScores = [];
    scores.forEach((score, iscore) => {
      row.forEach((v, iv) => {
        if (iv === iscore) return;
        if (!newScores[iv]) newScores[iv] = [];
        newScores[iv].push(score + v);
      });
    });
    return newScores.map(scores => Math.max(...scores));
  });
  return Math.max(...final);
}

function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c, i) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
// https://www.zerocho.com/category/Algorithm/post/5b7bf396b35bf5001b940dc5
