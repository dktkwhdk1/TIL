function solution(new_id) {
  let answer = '';
  // step 1
  new_id = new_id.toLowerCase();

  // step 2
  for (let i = 0; i < new_id.length; i++) {
    const ascii = new_id.charCodeAt(i);
    if (
      (97 <= ascii && ascii <= 122) ||
      (48 <= ascii && ascii <= 57) ||
      new_id[i] === '-' ||
      new_id[i] === '_' ||
      new_id[i] === '.'
    ) {
      answer += new_id[i];
    } else continue;
  }

  // step 3
  new_id = answer;
  answer = new_id[0];
  let prev = answer[0];
  for (let i = 1; i < new_id.length; i++) {
    const current = new_id[i];
    if (prev === '.' && current === '.') continue;
    answer += current;
    prev = current;
  }

  // step 4
  if (answer[0] === '.') answer = answer.slice(1);
  if (answer[answer.length - 1] === '.') answer = answer.slice(0, -1);

  // step 5
  if (!answer) answer = 'a';

  // step 6
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] === '.') {
      answer = answer.slice(0, -1);
    }
  }

  // step 7
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
