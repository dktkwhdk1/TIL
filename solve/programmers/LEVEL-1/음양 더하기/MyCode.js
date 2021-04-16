function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => (signs[idx] ? (acc += cur) : (acc -= cur)),
    0
  );
}
console.log(solution([4, 7, 12], [true, false, true])); // 9
