function solution(s) {
  const words = s.split(' ');
  return words
    .map(word => {
      let result = '';
      for (let i = 0; i < word.length; i++) {
        if (i % 2) result += word[i].toLowerCase();
        else result += word[i].toUpperCase();
      }
      console.log(result);
      return result;
    })
    .join(' ');
}

console.log(solution('try hello world')); // TrY HeLlO WoRlD

// https://programmers.co.kr/learn/courses/30/lessons/12930
