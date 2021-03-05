/* 리팩토링 후 */

function solution(record) {
  const userNickname = {};
  record.forEach(ele => {
    const userId = ele.split(' ')[1];
    userNickname[userId] = '';
  });

  const answer = [];
  record.forEach(ele => {
    const [message, userId, nickName] = ele.split(' ');
    message === 'Leave' ? '' : (userNickname[userId] = nickName);
  });

  record.forEach(ele => {
    const [message, userId] = ele.split(' ');
    message === 'Enter'
      ? answer.push(`${userNickname[userId]}님이 들어왔습니다.`)
      : message === 'Leave'
      ? answer.push(`${userNickname[userId]}님이 나갔습니다.`)
      : '';
  });
  return answer;
}

/* 리팩토링 전 */

function solution2(record) {
  const userNickname = {};
  for (let i = 0; i < record.length; i++) {
    const userId = record[i].split(' ')[1];
    userNickname[userId] = '';
  }

  const answer = [];
  for (let i = 0; i < record.length; i++) {
    const [message, userId, nickName] = record[i].split(' ');
    if (message === 'Leave') continue;
    userNickname[userId] = nickName;
  }
  for (let i = 0; i < record.length; i++) {
    const [message, userId] = record[i].split(' ');
    if (message === 'Change') continue;
    if (message === 'Enter') {
      answer.push(`${userNickname[userId]}님이 들어왔습니다.`);
    } else answer.push(`${userNickname[userId]}님이 나갔습니다.`);
  }
  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
// https://programmers.co.kr/learn/courses/30/lessons/42888
