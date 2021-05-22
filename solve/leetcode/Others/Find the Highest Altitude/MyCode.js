/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  return Math.max(
    ...gain.reduce(
      (acc, cur, idx) => {
        acc.push(acc[idx] + cur);
        return acc;
      },
      [0]
    )
  );
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
