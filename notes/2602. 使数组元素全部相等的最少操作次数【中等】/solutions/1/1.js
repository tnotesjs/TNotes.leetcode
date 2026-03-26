/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i]

  const bisect = (target) => {
    let lo = 0,
      hi = n
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (nums[mid] < target) lo = mid + 1
      else hi = mid
    }
    return lo
  }

  return queries.map((q) => {
    const j = bisect(q)
    // 左侧部分要加上去，右侧部分要减下来
    const left = q * j - pre[j]
    const right = pre[n] - pre[j] - q * (n - j)
    return left + right
  })
}
