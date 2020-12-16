function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
// 정규식을 써도 되는구나.

function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
// 이것도 '1e22' 때문에 안된다.
