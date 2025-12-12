/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0
  let currentCount = 0

  for (let num of nums) {
    if (num === 1) {
      currentCount++
      maxCount = Math.max(maxCount, currentCount)
    } else {
      currentCount = 0
    }
  }

  return maxCount
}
