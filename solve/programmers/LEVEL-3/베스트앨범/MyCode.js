function solution(genres, plays) {
  const genreCount = {};
  const playCount = {};

  for (let i = 0; i < plays.length; i++) {
    // 각 장르별로 몇 번 재생되었는지를 genreCount에 { 'classic': 1000 } 이런식으로 저장
    if (!genreCount[genres[i]]) genreCount[genres[i]] = 0;
    genreCount[genres[i]] += plays[i];

    // 각 장르별로 어떤 노래가 몇 번 재생되었는지 playCount에
    // { 'classic': [ [0, 1000], [1, 2000] ] }
    // 이런식으로 그 인덱스와 함께 저장
    if (!playCount[genres[i]]) playCount[genres[i]] = [];
    playCount[genres[i]].push([i, plays[i]]);
  }

  // playCount 객체를 노래의 재생 횟수로 정렬하되,
  // 재생 횟수가 똑같다면 인덱스(고유 번호)가 낮은 노래를 먼저 오게 정렬
  for (const genre in playCount) {
    playCount[genre].sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });
  }

  // genre의 이름만 담은 genreArr 생성
  const genreArr = Object.keys(genreCount);

  // genre의 이름을 genreCount를 통해 재생 횟수 내림차순으로 정렬
  genreArr.sort((a, b) => genreCount[b] - genreCount[a]);

  // genre의 이름을 담은 배열을 순회하면서
  // 정렬 되어 있는 playCount안에 해당 장르의 가장 첫 번째, 두 번째
  // 인덱스가 존재한다면 가져와서 answer에 push
  const answer = [];
  for (const genre of genreArr) {
    if (playCount[genre][0]) {
      answer.push(playCount[genre][0][0]);
    }
    if (playCount[genre][1]) {
      answer.push(playCount[genre][1][0]);
    }
    // answer.push(playCount[genre][0][0], playCount[genre][1][0]) -> fail
  }
  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]

console.log(solution(['classic'], [100])); // [0]
// https://programmers.co.kr/learn/courses/30/lessons/42579
