// https://programmers.co.kr/learn/courses/30/lessons/67258

// Map, Set이 정말 빠르다는 것을 알게해준 문제 !
function solution(gems) {
  const jewelry = new Set(gems).size; // 입력받은 보석 종류의 개수
  const compare = new Map(); // 'compare[보석 이름] = 빈도수'

  let left = 0,
    right = 0,
    answer = [gems.length];

  // left, right 범위 안에 보석 종류가 전체 보석 종류와 일치하면 answer update
  while (right < gems.length) {
    if (compare.has(gems[right])) {
      let val = compare.get(gems[right]);
      compare.set(gems[right], val + 1);
    } else {
      compare.set(gems[right], 1);

      // 모든 보석 종류를 싹쓸이 구매 했다면
      while (jewelry === compare.size) {
        if (answer[0] > right - left + 1) {
          answer[0] = right - left + 1;
          answer[1] = [left + 1, right + 1];
        }

        let cur = compare.get(gems[left]);

        // 빈도수 0은 삭제
        if (cur === 1) compare.delete(gems[left]);
        else compare.set(gems[left], cur - 1);

        left += 1;
      }
    }
    right += 1;
  }
  return answer[1] ? answer[1] : [1, gems.length];
}

console.log(
  solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])
); //	[3, 7]
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); //	[1, 3]
console.log(solution(['XYZ', 'XYZ', 'XYZ'])); //	[1, 1]
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); //	[1, 5]

// 시간초과
function solution2(gems) {
  const jewelry = new Set(gems).size;

  let left = 0,
    right = 0,
    answer = [gems.length];

  const compare = {};

  while (right < gems.length) {
    if (gems[right] in compare) {
      compare[gems[right]] += 1;
    } else {
      compare[gems[right]] = 1;

      while (jewelry === Object.keys(compare).length) {
        if (answer[0] > right - left + 1) {
          answer[0] = right - left + 1;
          answer[1] = [left + 1, right + 1];
        }

        compare[gems[left]] -= 1;
        if (compare[gems[left]] === 0) {
          delete compare[gems[left]];
        }
        left += 1;
      }
    }

    right += 1;
  }
  return answer[1] ? answer[1] : [1, gems.length];
}
