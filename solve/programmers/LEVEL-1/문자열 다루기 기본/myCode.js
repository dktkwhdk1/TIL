function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) return false;
  }
  return true;
}

/*
처음에는
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return !isNaN(s);
}
이렇게 코드를 작성했는데, 테스트케이스 하나가 통과가 안되었다.
input이 '1e22' 이런식으로 들어오게 되면
isNaN이 false를 리턴하고 결과적으로 true를 리턴하게 되는 문제였다...
*/
