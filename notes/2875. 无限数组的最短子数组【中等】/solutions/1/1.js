/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function (nums, target) {
  const n = nums.length
  const totalSum = nums.reduce((a, b) => a + b, 0)
  const fullCycles = Math.floor(target / totalSum)
  const remainder = target % totalSum
  if (remainder === 0) return fullCycles * n
  // 在双倍数组上滑动窗口，找和为 remainder 的最短子数组
  let minLen = Infinity,
    sum = 0,
    left = 0
  for (let right = 0; right < 2 * n; right++) {
    sum += nums[right % n]
    while (sum > remainder) {
      sum -= nums[left % n]
      left++
    }
    if (sum === remainder) {
      minLen = Math.min(minLen, right - left + 1)
    }
  }
  return minLen === Infinity ? -1 : fullCycles * n + minLen
}
