/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let left = 1,
    right = Math.max(...nums)
  while (left < right) {
    const mid = (left + right) >> 1
    let sum = 0
    for (const num of nums) sum += Math.ceil(num / mid)
    if (sum <= threshold) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
