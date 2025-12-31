/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let minVal = Infinity
  let maxVal = -Infinity
  let minCnt = 0
  let maxCnt = 0

  for (const num of nums) {
    if (num < minVal) {
      minVal = num
      minCnt = 1
    } else if (num === minVal) {
      minCnt += 1
    }

    if (num > maxVal) {
      maxVal = num
      maxCnt = 1
    } else if (num === maxVal) {
      maxCnt += 1
    }
  }

  if (minVal === maxVal) return 0
  return nums.length - minCnt - maxCnt
}
