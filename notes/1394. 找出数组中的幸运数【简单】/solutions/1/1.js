/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {}

// 计数出现次数后寻找值等于频次的最大元素
var findLucky = function (arr) {
  const freq = new Array(501).fill(0) // 题目给定 arr[i] <= 500

  for (const num of arr) {
    freq[num]++
  }

  let ans = -1
  for (let value = 1; value < freq.length; value++) {
    if (freq[value] === value) {
      ans = value
    }
  }

  return ans
}
