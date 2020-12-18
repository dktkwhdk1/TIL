function solution(numbers, hand) {
  let result = '';
  let l = [3, 0];
  let r = [3, 2];
  let arr = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  for (let ele of numbers) {
    if (ele === 1 || ele === 4 || ele === 7) {
      result += 'L';
      l = arr[ele];
    } else if (ele === 3 || ele === 6 || ele === 9) {
      result += 'R';
      r = arr[ele];
    } else {
      let target = arr[ele];
      let ltoTargetDir =
        Math.abs(target[0] - l[0]) + Math.abs(target[1] - l[1]);
      let rtoTargetDir =
        Math.abs(target[0] - r[0]) + Math.abs(target[1] - r[1]);

      if (ltoTargetDir === rtoTargetDir) {
        if (hand === 'right') {
          result += 'R';
          r = target;
        } else {
          result += 'L';
          l = target;
        }
      } else {
        if (ltoTargetDir > rtoTargetDir) {
          result += 'R';
          r = target;
        } else {
          result += 'L';
          l = target;
        }
      }
    }
  }
  return result;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
/*
처음에 짠 코드
1차원 배열로 해보려다가 어쩌면 당연하게도 실패

function solution(numbers, hand) {
  let result = '';
  let l = 4;
  let r = 4;

  let arr = [4, 1, 1, 1, 2, 2, 2, 3, 3, 3];
  for (let ele of numbers) {
    if (ele === 1 || ele === 4 || ele === 7) {
      result += 'L';
      l = arr[ele];
    } else if (ele === 3 || ele === 6 || ele === 9) {
      result += 'R';
      r = arr[ele];
    } else {
      let target = arr[ele];
      let ldir = Math.abs(target - l);
      let rdir = Math.abs(target - r);
      if (ldir === rdir) {
        if (hand === 'right') {
          result += 'R';
          r = target;
        } else {
          result += 'L';
          l = target;
        }
      } else {
        if (ldir > rdir) {
          result += 'R';
          r = target;
        } else {
          result += 'L';
          l = target;
        }
      }
    }
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
LRLLLRLLLRL
*/
