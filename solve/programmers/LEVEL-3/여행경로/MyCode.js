function solution(tickets) {
  const answer = [];
  const visit = Array(tickets.length).fill(false);
  tickets.sort();

  function dfs(cur, use) {
    answer.push(cur);
    if (use === tickets.length) return true;

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === cur && !visit[i]) {
        visit[i] = true;
        if (dfs(tickets[i][1], use + 1)) return true;
        visit[i] = false;
      }
    }
    answer.pop();
    return false;
  }

  dfs('ICN', 0);
  return answer;
}

console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
);
// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
);
// ["ICN", "JFK", "HND", "IAD"]
// https://programmers.co.kr/learn/courses/30/lessons/43164
