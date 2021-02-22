function solution(n, computers) {
  const visit = Array(n).fill(false);
  let answer = 0;

  function dfs(node) {
    visit[node] = true;

    for (let i = 0; i < computers.length; i++) {
      const next = computers[node][i];
      if (next === 1 && !visit[i]) dfs(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      dfs(i);
      answer += 1;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
// https://programmers.co.kr/learn/courses/30/lessons/43162
