const solution = (n, edge) => {
  const graph = makeGraph(edge);

  const answer = Array(n + 1).fill(0),
    check = Array(n + 1).fill(false);
  const queue = [1];
  check[1] = true;

  while (queue.length) {
    const current = queue.shift();

    if (!graph[current]) continue;
    for (const next of graph[current]) {
      if (next === current || check[next]) continue;

      queue.push(next);
      check[next] = true;
      answer[next] = answer[current] + 1;
    }
  }

  let max = Math.max(...answer);
  return answer.filter(item => item === max).length;
};

// 입력받은 edge 정보를 바탕으로 graph를 만들어 리턴하는 함수
const makeGraph = edge => {
  return edge.reduce((acc, cur) => {
    const [from, to] = cur;
    if (!acc[from]) acc[from] = [];
    if (!acc[to]) acc[to] = [];

    acc[from].push(to);
    acc[to].push(from);
    return acc;
  }, {});
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // 3
// https://programmers.co.kr/learn/courses/30/lessons/49189

// [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

// [
//   [1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 1, 0, 1],
//   [0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 1, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 1],
// ];

/* 리팩토링 전 정답 코드 */
function solution3(n, edge) {
  const graph = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!graph[i]) graph[i] = [];
      if (i === j) graph[i][j] = 1;
      else graph[i][j] = 0;
    }
  }
  console.log(graph);
  for (let i = 0; i < edge.length; i++) {
    if (!graph[edge[i][0]]) graph[edge[i][0]] = [];
    if (!graph[edge[i][1]]) graph[edge[i][1]] = [];
    graph[edge[i][0]].push(edge[i][1]);
    graph[edge[i][1]].push(edge[i][0]);
  }

  const check = Array(n + 1).fill(false),
    result = Array(n + 1).fill(0);
  const queue = [1];
  check[1] = true;

  while (queue.length) {
    const current = queue.shift();

    if (!graph[current]) continue;
    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (next === current || check[next]) continue;

      check[next] = true;
      queue.push(next);
      result[next] = result[current] + 1;
    }
  }

  let answer = 0;
  let max = Math.max(...result);
  for (const item of result) {
    if (max === item) answer += 1;
  }
  return answer;
}
