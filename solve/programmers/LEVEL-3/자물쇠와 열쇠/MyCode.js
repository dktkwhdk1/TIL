function solution(key, lock) {
  for (let k = 0; k < 4; k++) {
    // 처음엔 주어진 key 그대로, 그 이후는 90도 회전시켜 확인한다.
    if (k) key = getRotateArray(key);

    for (let i = 0; i < 3 * lock.length - (lock.length - 1); i++) {
      for (let j = 0; j < 3 * lock.length - (lock.length - 1); j++) {
        const newLock = getCheckArray(lock);
        let isAnswer = true;

        // key 배열을 순회하는 이중 loop
        for (let r = i; r < key.length + i; r++) {
          for (let c = j; c < key.length + j; c++) {
            if (newLock[r][c] && key[r - i][c - j]) {
              isAnswer = false;
              break;
            }
            if (!newLock[r][c] && key[r - i][c - j]) {
              newLock[r][c] = 1;
            }
          }
          if (!isAnswer) break;
        }
        if (!isAnswer) continue;

        for (let r = lock.length; r < 2 * lock.length; r++) {
          for (let c = lock.length; c < 2 * lock.length; c++) {
            if (!newLock[r][c]) {
              isAnswer = false;
              break;
            }
          }
          if (!isAnswer) break;
        }
        if (isAnswer) return true;
      }
    }
  }
  return false;
}

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
function getCheckArray(arr) {
  const newArr = [];
  for (let i = 0; i < 3 * arr.length; i++) {
    newArr.push([]);
  }
  for (let i = 0; i < 3 * arr.length; i++) {
    for (let j = 0; j < 3 * arr.length; j++) {
      if (
        arr.length <= i &&
        i < 2 * arr.length &&
        arr.length <= j &&
        j < 2 * arr.length
      ) {
        newArr[i][j] = arr[i - arr.length][j - arr.length];
      } else newArr[i][j] = 0;
    }
  }
  return newArr;
}

// 2차원 배열을 오른쪽으로 90도 회전시켜 리턴해주는 함수
function getRotateArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push([]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArr[j][arr.length - i - 1] = arr[i][j];
    }
  }
  return newArr;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); // true

console.log(
  solution(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  )
); // true

console.log(
  solution(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  )
); // false

// https://programmers.co.kr/learn/courses/30/lessons/60059
