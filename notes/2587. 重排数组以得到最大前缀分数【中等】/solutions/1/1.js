/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  nums.sort((a, b) => b - a)
  let sum = 0, count = 0
  for (const v of nums) {
    sum += v
    if (sum > 0) count++
    else break
  }
  return count
}
