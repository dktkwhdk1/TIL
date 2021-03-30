function solution(m, musicinfos) {
  m = removeAndReplace(m);
  const musics = musicinfos
    .map(music => music.split(','))
    .map(music => {
      const [start, end, title, info] = music;
      const startTime = +(start[0] + start[1]) * 60 + (start[3] + start[4]);
      const endTime = (+(end[0] + end[1]) || 24) * 60 + (end[3] + end[4]);

      return [endTime - startTime, title, info];
    })
    .sort((a, b) => b[0] - a[0])
    .map(music => {
      let [time, title, info] = music;
      info = removeAndReplace(info);

      const result = [];
      let idx = 0;
      while (time--) {
        result.push(info[idx]);
        idx = (idx + 1) % info.length;
      }
      return [title, result.join('')];
    });
  console.log(musics);
  return '(None)';
}

function removeAndReplace(str) {
  const replaceShop = {
    C: 'H',
    D: 'I',
    F: 'J',
    G: 'K',
    A: 'L',
  };
  return str
    .split('')
    .map((val, idx) => (str[idx + 1] === '#' ? replaceShop[val] : val))
    .filter(item => item !== '#')
    .join('');
}

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "HELLO"
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
); // "FOO"
console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "WORLD"

/*
function solution2(m, musicinfos) {
  m = removeAndReplace(m);
  const answer = musicinfos
    .map(music => music.split(','))
    .map(music => {
      const [start, end, title, info] = music;
      const startTime = +(start[0] + start[1]) * 60 + (start[3] + start[4]);
      const endTime = (+(end[0] + end[1]) || 24) * 60 + (end[3] + end[4]);

      return [endTime - startTime, title, info];
    })
    .sort((a, b) => b[0] - a[0])
    .map(music => {
      let [time, title, info] = music;
      info = removeAndReplace(info);

      const result = [];
      let idx = 0;
      while (time--) {
        result.push(info[idx]);
        idx = (idx + 1) % info.length;
      }
      return [title, result.join('')];
    })
    .filter(music => music[1].indexOf(m) !== -1)[0][0];
  return answer ? answer : '(None)';
}

function removeAndReplace(str) {
  const replaceShop = {
    C: 'H',
    D: 'I',
    F: 'J',
    G: 'K',
    A: 'L',
  };
  return str
    .split('')
    .map((val, idx) => (str[idx + 1] === '#' ? replaceShop[val] : val))
    .filter(item => item !== '#')
    .join('');
}

// console.log(
//   solution2('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "HELLO"
// console.log(
//   solution2('CC#BCC#BCC#BCC#B', [
//     '03:00,03:30,FOO,CC#B',
//     '04:00,04:08,BAR,CC#BCC#BCC#B',
//   ])
// ); // "FOO"
// console.log(
//   solution2('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "WORLD"
*/
