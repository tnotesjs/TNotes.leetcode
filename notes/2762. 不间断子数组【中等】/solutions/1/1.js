/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let res = 0
  let left = 0
  // 维护窗口内最大值和最小值（用单调队列）
  const maxQ = [] // 单调递减
  const minQ = [] // 单调递增
  for (let right = 0; right < nums.length; right++) {
    while (maxQ.length && nums[maxQ[maxQ.length - 1]] <= nums[right]) maxQ.pop()
    maxQ.push(right)
    while (minQ.length && nums[minQ[minQ.length - 1]] >= nums[right]) minQ.pop()
    minQ.push(right)
    while (nums[maxQ[0]] - nums[minQ[0]] > 2) {
      left++
      if (maxQ[0] < left) maxQ.shift()
      if (minQ[0] < left) minQ.shift()
    }
    res += right - left + 1
  }
  return res
}
