function solution(cacheSize, cities) {
  let answer = 0;
  const arr = [];

  for (let city of cities) {
    city = city.toLowerCase();
    const index = arr.indexOf(city);
    if (index > -1) {
      answer += 1;
      arr.splice(index, 1);
      arr.push(city);
    } else {
      answer += 5;
      arr.push(city);
      if (arr.length > cacheSize) arr.shift();
    }
  }

  return answer;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
); // 50

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
); // 21

console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 60

console.log(
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 52

console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])); // 16
console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])); // 25

// https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
