function solution(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;
    obj[nums[i]] += 1;
  }
  if (Object.keys(obj).length >= nums.length / 2) {
    return nums.length / 2;
  }
  return Object.keys(obj).length;
}

console.log(solution([3, 3, 3, 2, 2, 4])); // 3
// https://programmers.co.kr/learn/courses/30/lessons/1845
