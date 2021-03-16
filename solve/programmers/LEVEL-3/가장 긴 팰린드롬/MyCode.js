function solution(s) {
  const isPalindrome = (str, left, right) => {
    while (left <= right) {
      if (str[left] !== str[right]) return false;
      left += 1;
      right -= 1;
    }
    return true;
  };

  // i = 0 / left = 0 / right = s.length - 1

  // i = 1 / left = 1 / right = s.length - 1
  //         left = 0 / right = s.length - 2

  // i = 2 / left = 2 / right = s.length - 1
  //         left = 1 / right = s.length - 2
  //         left = 0 / right = s.length - 3
  //                 ...
  //                 ...

  for (let i = 0; i < s.length - 1; i++) {
    for (
      let left = i, right = s.length - 1;
      left >= 0, right >= s.length - 1 - i;
      left--, right--
    ) {
      if (isPalindrome(s, left, right)) return right - left + 1;
    }
  }
  return 1;
}

console.log(solution('abcdcba'));
console.log(solution('abacde'));
console.log(solution('a'));

// https://programmers.co.kr/learn/courses/30/lessons/12904
