/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let flag = false;
  return String(num)
    .split('')
    .map(el => {
      if (flag) return el;
      if (el === '6') {
        flag = true;
        return '9';
      }
      return el;
    })
    .join('');
};
