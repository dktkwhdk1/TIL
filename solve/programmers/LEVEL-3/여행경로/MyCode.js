function solution(tickets) {
  const answer = [];
  const visit = Array(tickets.length).fill(false);
  tickets.sort();

  function dfs(cur, ticket, answer, visit, use) {
    answer.push(cur);
    if (use === ticket.length) return true;

    for (let i = 0; i < ticket.length; i++) {
      if (ticket[i][0] === cur && !visit[i]) {
        visit[i] = true;
        if (dfs(ticket[i][1], ticket, answer, visit, use + 1)) return true;
        visit[i] = false;
      }
    }
    answer.pop();
    return false;
  }

  dfs('ICN', tickets, answer, visit, 0);
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
