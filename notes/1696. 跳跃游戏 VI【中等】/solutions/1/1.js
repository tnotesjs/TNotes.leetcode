/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  const n = nums.length
  const dp = new Array(n)
  dp[0] = nums[0]
  const deque = [0] // 单调递减队列
  let head = 0
  for (let i = 1; i < n; i++) {
    while (head < deque.length && deque[head] < i - k) head++
    dp[i] = dp[deque[head]] + nums[i]
    while (head < deque.length && dp[deque[deque.length - 1]] <= dp[i])
      deque.pop()
    deque.push(i)
  }
  return dp[n - 1]
}
