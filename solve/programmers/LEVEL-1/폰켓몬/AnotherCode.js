function solution(nums) {
  let answer = 0;
  const select = nums.length / 2;
  const check = nums.reduce((total, cur) => {
    total[cur] ? total[cur]++ : (total[cur] = 1);
    return total;
  }, {});
  const checkLeng = Object.keys(check).length;
  return checkLeng > select ? select : checkLeng;
}
