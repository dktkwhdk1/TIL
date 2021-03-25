function solution(s, n) {
  const loAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let answer = '';
  for (let i = 0; i < s.length; i++) {
    const idx1 = loAlpha.indexOf(s[i]);
    const idx2 = upAlpha.indexOf(s[i]);

    if (idx1 === -1 && idx2 === -1) {
      answer += s[i];
    } else {
      if (idx1 !== -1) {
        answer += loAlpha[(idx1 + n) % 26];
      } else {
        answer += upAlpha[(idx2 + n) % 26];
      }
    }
  }
  return answer;
}
