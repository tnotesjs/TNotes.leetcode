/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  // 排序后，最小和最大元素分别在两端
  nums.sort((a, b) => a - b)
  let minAvg = Infinity
  let left = 0
  let right = nums.length - 1
  // 双指针从两端向中间移动
  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2
    minAvg = Math.min(minAvg, avg)
    left++
    right--
  }
  return minAvg
}
