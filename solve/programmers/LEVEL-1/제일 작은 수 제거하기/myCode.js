function solution(arr) {
  if (arr.length === 1) return [-1];
  let min = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(min), 1);
  return arr;
}
