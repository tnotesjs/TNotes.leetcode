/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  const n = nums.length
  let total = 0
  for (const v of nums) total += v
  let leftSum = 0,
    minDiff = Infinity,
    idx = 0
  for (let i = 0; i < n; i++) {
    leftSum += nums[i]
    const leftAvg = Math.floor(leftSum / (i + 1))
    const rightAvg =
      i === n - 1 ? 0 : Math.floor((total - leftSum) / (n - i - 1))
    const diff = Math.abs(leftAvg - rightAvg)
    if (diff < minDiff) {
      minDiff = diff
      idx = i
    }
  }
  return idx
}
