function solution(numbers, hand) {
  const hands = new Map();
  let answer = '';
  hands.set('left', '*');
  hands.set('right', '#');

  numbers.forEach((number) => {
    if ([1, 4, 7].includes(number)) {
      answer += 'L';
      hands.set('left', number);
    } else if ([3, 6, 9].includes(number)) {
      answer += 'R';
      hands.set('right', number);
    } else {
      answer += findNearest(hands, number, hand);
    }
  });

  return answer;
}

function findNearest(hands, number, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const left = hands.get('left');
  const right = hands.get('right');
  let numIndex;
  let leftIndex;
  let rightIndex;

  keypad.forEach((arr, index) => {
    if (arr.includes(number)) numIndex = [index, arr.indexOf(number)];
    if (arr.includes(left)) leftIndex = [index, arr.indexOf(left)];
    if (arr.includes(right)) rightIndex = [index, arr.indexOf(right)];
  });

  const leftDistance = checkDistance(numIndex, leftIndex);
  const rightDistance = checkDistance(numIndex, rightIndex);

  if (leftDistance === rightDistance) {
    if (hand === 'left') {
      hands.set('left', number);
      return 'L';
    } else {
      hands.set('right', number);
      return 'R';
    }
  } else {
    if (leftDistance < rightDistance) {
      hands.set('left', number);
      return 'L';
    } else {
      hands.set('right', number);
      return 'R';
    }
  }
}

function checkDistance(numIndex, hand) {
  if (numIndex[0] === hand[0]) {
    return Math.abs(numIndex[1] - hand[1]);
  }

  return Math.abs(numIndex[0] - hand[0]) + Math.abs(numIndex[1] - hand[1]);
}
