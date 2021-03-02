function Harshad(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}
function Harshad(n) {
  var result;
  var sum = 0;
  var arr = String(n).split('');
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}
