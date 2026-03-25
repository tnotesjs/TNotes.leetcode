/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 单调队列维护最大值和最小值
  const maxQ = [],
    minQ = []
  let left = 0,
    res = 0
  for (let right = 0; right < nums.length; right++) {
    while (maxQ.length && nums[maxQ[maxQ.length - 1]] <= nums[right]) maxQ.pop()
    while (minQ.length && nums[minQ[minQ.length - 1]] >= nums[right]) minQ.pop()
    maxQ.push(right)
    minQ.push(right)
    while (nums[maxQ[0]] - nums[minQ[0]] > limit) {
      left++
      if (maxQ[0] < left) maxQ.shift()
      if (minQ[0] < left) minQ.shift()
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
