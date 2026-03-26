/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]

  const dp = new Array(n + 1).fill(0)
  const last = new Array(n + 1).fill(0)
  const f = new Array(n + 1).fill(0) // f[j] = prefix[j] + last[j]

  const dq = [0]
  let head = 0
  let bestJ = -1

  for (let i = 1; i <= n; i++) {
    while (head < dq.length && f[dq[head]] <= prefix[i]) {
      const j = dq[head++]
      if (
        bestJ === -1 ||
        dp[j] > dp[bestJ] ||
        (dp[j] === dp[bestJ] && prefix[j] > prefix[bestJ])
      ) {
        bestJ = j
      }
    }
    if (bestJ !== -1) {
      dp[i] = dp[bestJ] + 1
      last[i] = prefix[i] - prefix[bestJ]
    } else {
      dp[i] = 1
      last[i] = prefix[i]
    }
    f[i] = prefix[i] + last[i]
    while (
      dq.length > head &&
      f[dq[dq.length - 1]] >= f[i] &&
      (dp[dq[dq.length - 1]] < dp[i] ||
        (dp[dq[dq.length - 1]] === dp[i] &&
          prefix[dq[dq.length - 1]] <= prefix[i]))
    ) {
      dq.pop()
    }
    dq.push(i)
  }

  return dp[n]
}
