/*
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 둘 중 더 짧은 배열을 앞의 인자로 넘겨준다.(Follow up에서 힌트를 얻었다)
  if (nums1.length < nums2.length) {
    return getResult(nums1, nums2);
  } else return getResult(nums2, nums1);
};

function getResult(arr1, arr2) {
  const answer = [],
    check = Array(arr2.length).fill(false);

  // 둘 중 짧은 배열의 원소를 하나씩 긴 배열에 들어있는지 확인한다.
  // 단, 긴 배열에서 이전에 이미 확인한 원소는 check 배열을 통해 처리한다.
  for (let i = 0; i < arr1.length; i++) {
    const val = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (val === arr2[j] && !check[j]) {
        answer.push(val);
        check[j] = true;
        break;
      }
    }
  }
  return answer;
}

// Test
console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9] or [9,4]

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
