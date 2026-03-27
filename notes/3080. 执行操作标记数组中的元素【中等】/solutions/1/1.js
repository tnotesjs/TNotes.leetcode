/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function(nums, queries) {
  const n = nums.length
  // 创建 (值, 索引) 对并排序
  const sorted = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const marked = new Uint8Array(n)
  let totalSum = 0
  for (const num of nums) totalSum += num
  let ptr = 0
  const res = []
  for (const [index, k] of queries) {
    if (!marked[index]) {
      marked[index] = 1
      totalSum -= nums[index]
    }
    let remaining = k
    while (remaining > 0 && ptr < n) {
      if (!marked[sorted[ptr][1]]) {
        marked[sorted[ptr][1]] = 1
        totalSum -= sorted[ptr][0]
        remaining--
      }
      ptr++
    }
    res.push(totalSum)
  }
  return res
}
