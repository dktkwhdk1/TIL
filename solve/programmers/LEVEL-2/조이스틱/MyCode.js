function solution(name) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let current = '';
  for (let i = 0; i < name.length; i++) {
    current += 'A';
  }

  let curIdx = 0;
  let answer = 0;
  let isBack = false;
  while (name !== current) {
    if (name[curIdx] === 'A') {
      if (!curIdx && name[curIdx + 1] === 'A') {
        curIdx = name.length - 1;
        isBack = true;
      } else if (isBack) {
        curIdx -= 1;
      } else {
        if (curIdx) {
          let goIdx = 0;
          for (let i = curIdx + 1; i < name.length; i++) {
            if (name[i] !== 'A') {
              goIdx = i;
              break;
            }
          }

          let rightLen = goIdx - curIdx;
          let leftLen = curIdx - goIdx + name.length;
          if (rightLen > leftLen) {
            isBack = true;
            curIdx -= 1;
          }
        }
        if (!isBack) curIdx += 1;
      }
      answer += 1;
    } else {
      const go = alpha.indexOf(name[curIdx]);
      name = name.slice(0, curIdx) + 'A' + name.slice(curIdx + 1);
      if (go > 13) {
        answer += 26 - go;
      } else {
        answer += go;
      }
    }
  }
  return answer;
}

const name1 = 'JEROEN';
console.log(solution(name1)); // 56

const name2 = 'BCAAAAAAAAAAAAAAZAAAAZ';
console.log(solution(name2)); // 13
