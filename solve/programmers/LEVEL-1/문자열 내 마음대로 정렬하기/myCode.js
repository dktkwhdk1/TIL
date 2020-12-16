function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    } else if (a[n] > b[n]) {
      return 1;
    } else {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] < b[i]) {
          return -1;
        } else if (a[i] > b[i]) {
          return 1;
        }
      }
      return 0;
    }
  });
}

console.log(solution(['abce', 'abcd', 'cdx'], 2));
// Array.prototype.sort()의 비교 과정에 1, 0, -1 중 하나를 리턴하는거였음을 까먹었었는데
// 이 문제를 통해 상기했다.
