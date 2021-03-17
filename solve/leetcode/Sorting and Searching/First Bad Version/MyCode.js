/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // 이분탐색(Binary Search) 문제로 해석해서 풀었다.
  return function (n) {
    let start = 1,
      end = n;

    while (1) {
      let mid = parseInt((start + end) / 2);

      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;
        end = mid;
      } else {
        if (isBadVersion(mid + 1)) return mid + 1;
        start = mid;
      }
    }
  };
};

console.log(
  solution(function (n) {
    if (n >= 4) return true;
    return false;
  })(5)
); // 4
