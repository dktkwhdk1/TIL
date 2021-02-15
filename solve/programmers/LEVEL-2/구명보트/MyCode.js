function solution(people, limit) {
  let answer = 0;
  // people 1명 이상 50,000명 이하
  // 사람 몸무게, 구명보트 40kg 이상 240kg 이하
  // 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 큼(모두 구출 가능)
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  while (left < right) {
    let sum = people[left] + people[right];
    if (sum > limit) {
      left += 1;
    } else {
      left += 1;
      right -= 1;
    }
    answer += 1;
  }
  if (left === right) answer += 1;
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
