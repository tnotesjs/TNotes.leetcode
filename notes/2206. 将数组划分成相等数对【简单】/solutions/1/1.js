/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const freq = Array(501).fill(0)
  for (const num of nums) freq[num] += 1
  return freq.every((c) => c % 2 === 0)
}
