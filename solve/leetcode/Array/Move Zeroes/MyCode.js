// 정수 요소를 갖는 배열이 주어지면 0이 아닌 요소의 상대적인 순서를 유지하면서 0을 모두 그 끝으로 이동한다.
// 배열의 복사본을 만들지 않고 내부에서만(?) 동작하게 해야한다.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (!nums[i]) {
      nums.push(0);
      count += 1;
    }
  }
  let idx = 0;
  while (count) {
    if (!nums[idx]) {
      nums.splice(idx, 1);
      count -= 1;
    } else idx += 1;
  }
};

/* test */
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
