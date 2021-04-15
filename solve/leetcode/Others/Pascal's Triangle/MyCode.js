/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = [[1]];
  if (numRows === 1) return answer;
  answer.push([1, 1]);
  if (numRows === 2) return answer;

  for (let i = 2; i < numRows; i++) {
    const arr = answer[i - 1];
    const cur = [];

    for (let j = 0; j < arr.length - 1; j++) {
      cur.push(arr[j] + arr[j + 1]);
    }

    cur.unshift(1);
    cur.push(1);
    answer.push(cur);
  }
  return answer;
};

// Test
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
