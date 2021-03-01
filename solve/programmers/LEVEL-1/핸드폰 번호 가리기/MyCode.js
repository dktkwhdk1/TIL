function solution(phone_number) {
  return phone_number
    .split('')
    .map((ele, idx) => {
      if (idx < phone_number.length - 4) return '*';
      else return ele;
    })
    .join('');
}

console.log(solution('01033334444')); // '*******4444'
// https://programmers.co.kr/learn/courses/30/lessons/12948
