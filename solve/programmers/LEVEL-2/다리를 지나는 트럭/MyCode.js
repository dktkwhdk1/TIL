function solution(bridge_length, weight, truck_weights) {
  const queue = []; // 현재 다리의 상태
  let answer = 0, // 현재 경과된 시간(최종적으로 경과한 시간이 문제의 정답)
    currentWeight = 0; // 현재 다리에 올라와 있는 트럭들의 무게

  // 트럭이 모두 지나가면 탈출하는 while loop
  while (truck_weights.length || queue.length) {
    answer += 1; // 1초가 흐르면

    // 현재 시간이 다리 길이보다 클 때부터 트럭은 다리를 통과한다.
    // 다리를 지나가는 부분을 먼저 둔 이유는 다리를 지남과 동시에
    // 다리를 건너려는 트럭이 다리로 들어와야 하기 때문이다.
    if (answer >= bridge_length) {
      // 트럭이 진입한 시간을 큐에 같이 넣어주기 때문에
      // 현재까지 경과한 시간에서 트럭이 진입한 시간을 뺀 값이 다리의 길이가 되면 지나갈 수 있다.
      if (queue[0] && answer - queue[0][1] === bridge_length) {
        currentWeight -= queue.shift()[0];
        if (!queue.length && !truck_weights.length) break;
      }
    }
    // 현재 트럭들의 무게와 지나가려는 트럭의 무게를 더한 값이
    // 다리가 견디는 무게보다 작거나 같으면 다리를 건널 수 있다.
    if (currentWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      queue.push([truck, answer]);

      currentWeight += truck;
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
// https://programmers.co.kr/learn/courses/30/lessons/42583
