function solution(arr) {
  let answer = [arr[0]];
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prev) continue;
    else {
      answer.push(arr[i]);
      prev = arr[i];
    }
  }
  return answer;
}

/*
return [...new Set(arr)];
이것은 배열의 처음부터 끝까지 중복되는걸 아예 다 없애줌
하지만 이 문제의 조건과는 맞지 않아서 안됨
*/
