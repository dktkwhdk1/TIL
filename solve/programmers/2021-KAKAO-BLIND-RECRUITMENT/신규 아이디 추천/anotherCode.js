function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

function solution(nid) {
  var ans = '';
  for (let i = 0; i < nid.length; i++) {
    let c = nid[i].toLowerCase();
    if ('0123456789abcdefghijklmnopqrstuvwxyz.-_'.indexOf(c) === -1) continue;
    if (c === '.' && ans[ans.length - 1] === '.' && nid[i - 1]) continue;
    ans += c;
  }
  if (ans[0] === '.') ans = ans.slice(1);
  ans = ans.slice(0, 15);
  if (ans[ans.length - 1] === '.') ans = ans.slice(0, ans.length - 1);
  if (!ans) ans = 'a';
  while (ans.length < 3) ans += ans[ans.length - 1];
  return ans;
}
