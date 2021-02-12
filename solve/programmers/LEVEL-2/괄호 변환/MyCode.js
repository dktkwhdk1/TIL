function solution(p) {
  if (!p.length) return '';
  let u = '',
    v = '';
  let flag = true;
  for (let i = 0; i < p.length; i++) {
    u += p[i];
    if (u.length % 2 === 0) {
      let count = 0;
      for (let j = 0; j < u.length; j++) {
        u[j] === '(' ? count++ : count--;
        if (count < 0) flag = false;
      }
      if (!count) {
        v = p.slice(i + 1);
        break;
      }
    }
  }

  const newV = solution(v);
  if (flag) return u + newV;
  else {
    let newU = '(' + newV + ')';
    u = u.slice(1, u.length - 1);
    for (let i = 0; i < u.length; i++) {
      u[i] === '(' ? (newU += ')') : (newU += '(');
    }
    return newU;
  }
}

const p = '()))((()';
console.log(solution(p)); // "()(())()"
