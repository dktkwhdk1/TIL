function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
function average(array) {
  var result = array.reduce(function (a, b) {
    return a + b;
  });
  return result / array.length;
}
