function solution(brown, yellow) {
  for (let i = 3; i <= 2000; i++) {
    for (let j = i; j >= 3; j--) {
      let bCount = 0,
        yCount = 0;
      for (let k = 0; k < i; k++) {
        if (k === 0 || k === i - 1) bCount += j;
        else {
          bCount += 2;
          yCount += j - 2;
        }
      }
      if (bCount === brown && yCount === yellow) return [i, j];
    }
  }
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]

/**
function solution(brown, yellow) {
  for (let i = 3; i <= 2000; i++) {
    for (let j = i; j >= 3; j--) {
      let bCount = 0,
        yCount = 0;
      for (let r = 0; r < i; r++) {
        for (let c = 0; c < j; c++) {
          if (r === 0 || r === i - 1) {
            bCount += 1;
          } else {
            if (c === 0 || c === j - 1) bCount += 1;
            else yCount += 1;
          }
        }
      }
      if (bCount === brown && yCount === yellow) return [i, j];
    }
  }
}
 */
