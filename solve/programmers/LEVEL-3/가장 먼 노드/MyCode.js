const solution = (n, edge) => {
  const graph = makeGraph(edge);

  const answer = Array(n + 1).fill(0), // 1번 노드로부터의 거리를 담을 배열
    check = Array(n + 1).fill(false); // 노드 방문 처리를 위한 배열
  const queue = [1]; // 시작 노드(1번)
  check[1] = true; // 1번은 방문했다고 하고 시작

  // BFS
  while (queue.length) {
    const current = queue.shift();

    graph[current].forEach(next => {
      if (check[next]) return; // 이미 방문했는지 check

      queue.push(next);
      check[next] = true;
      answer[next] = answer[current] + 1;
    });
  }

  let max = Math.max(...answer); // 최대 거리를 찾고
  return answer.filter(item => item === max).length; // 그 최댓값을 가지는 요소만 남긴 배열의 길이를 리턴
};

// 입력받은 edge 정보를 바탕으로 graph를 만들어 리턴하는 함수
const makeGraph = edge => {
  return edge.reduce((acc, cur) => {
    const [from, to] = cur;
    if (!acc[from]) acc[from] = [];
    if (!acc[to]) acc[to] = [];

    // 양방향 그래프이므로 양쪽 노드 모두 간선을 만들어준다.
    acc[from].push(to);
    acc[to].push(from);
    return acc;
  }, {}); // '{}'를 '[]'로 바꾸면 배열로도 구현이 가능하다.
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
