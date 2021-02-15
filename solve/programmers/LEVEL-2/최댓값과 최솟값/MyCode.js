function solution(s) {
  const arr = s
    .split(' ')
    .map(ele => +ele)
    .sort((a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}

console.log(solution('-1 -2 -3 -4'));
