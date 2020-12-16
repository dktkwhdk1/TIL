function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
// 음... 굳!
