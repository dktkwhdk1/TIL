function solution(n, computers) {
  var answer = 0;
  var isVisited = [];

  for (var i = 0; i < n; i++) {
    isVisited.push(false);
  }

  var DFS = function (computers, i) {
    console.log('DFS excuted');
    if (isVisited[i]) {
      return;
    }
    isVisited[i] = true;
    console.log(isVisited);

    for (var j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        console.log(i + ', ' + j);
        console.log('connected');
        DFS(computers, j);
      }
    }
  };

  for (var i = 0; i < n; i++) {
    if (!isVisited[i]) {
      answer++;
      console.log(isVisited, '도입부');
      console.log(answer);
      DFS(computers, i);
    }
  }

  return answer;
}
