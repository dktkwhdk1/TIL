/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map(arr => arr.reduce((acc, cur) => acc + cur)));
};
