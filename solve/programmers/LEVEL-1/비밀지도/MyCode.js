function solution(n, arr1, arr2) {
  function getBinary(arr) {
    const binaries = [];
    for (let i = 0; i < arr.length; i++) {
      const result = [];
      while (arr[i]) {
        result.unshift(arr[i] % 2);
        arr[i] = parseInt(arr[i] / 2);
      }
      if (result.length < n) {
        const len = result.length;
        for (let j = 0; j < n - len; j++) {
          result.unshift(0);
        }
      }
      binaries.push(result.join(''));
    }
    return binaries;
  }

  const binary1 = getBinary(arr1);
  const binary2 = getBinary(arr2);

  const answer = [];
  for (let i = 0; i < n; i++) {
    let resultStr = '';
    for (let j = 0; j < n; j++) {
      if (binary1[i][j] === '1' || binary2[i][j] === '1') {
        resultStr += '#';
      } else resultStr += ' ';
    }
    answer.push(resultStr);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
