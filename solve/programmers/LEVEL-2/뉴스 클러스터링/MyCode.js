function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let A = [],
    B = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const code1 = str1[i].charCodeAt(),
      code2 = str1[i + 1].charCodeAt();
    if (97 <= code1 && code1 <= 122 && 97 <= code2 && code2 <= 122) {
      A.push(str1[i] + str1[i + 1]);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const code1 = str2[i].charCodeAt(),
      code2 = str2[i + 1].charCodeAt();
    if (97 <= code1 && code1 <= 122 && 97 <= code2 && code2 <= 122) {
      B.push(str2[i] + str2[i + 1]);
    }
  }
  if (!A.length && !B.length) return 65536;

  A.sort();
  B.sort();

  const Aobj = {},
    Bobj = {};
  for (let i = 0; i < A.length; i++) {
    if (!Aobj[A[i]]) Aobj[A[i]] = 0;
    Aobj[A[i]] += 1;
  }
  for (let i = 0; i < B.length; i++) {
    if (!Bobj[B[i]]) Bobj[B[i]] = 0;
    Bobj[B[i]] += 1;
  }

  const AandB = [],
    AorB = [];
  for (let i = 0; i < A.length; i++) {
    if (B.indexOf(A[i]) > -1) {
      if (Aobj[A[i]] && Bobj[A[i]]) {
        AandB.push(A[i]);
        Aobj[A[i]] -= 1;
        Bobj[A[i]] -= 1;
      }
    }
    AorB.push(A[i]);
  }
  for (let i = 0; i < B.length; i++) {
    if (A.indexOf(B[i]) === -1) AorB.push(B[i]);
    else {
      if (Bobj[B[i]]) {
        AorB.push(B[i]);
        Bobj[B[i]] -= 1;
      }
    }
  }
  return Math.floor((AandB.length / AorB.length) * 65536);
}

console.log(solution('FRANCE', 'french')); // 16384
console.log(solution('handshake', 'shake hands')); // 65536
console.log(solution('aa1+aa2', 'AAAA12')); // 43690
console.log(solution('E=M*C^2', 'e=m*c^2')); //65536
// https://programmers.co.kr/learn/courses/30/lessons/17677
