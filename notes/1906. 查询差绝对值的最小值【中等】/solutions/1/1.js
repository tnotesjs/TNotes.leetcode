/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
  const n = nums.length
  // prefix[i][v] = 前 i 个元素中 v 出现的次数
  const prefix = Array.from({ length: n + 1 }, () => new Array(101).fill(0))
  for (let i = 0; i < n; i++) {
    for (let v = 1; v <= 100; v++) prefix[i + 1][v] = prefix[i][v]
    prefix[i + 1][nums[i]]++
  }
  return queries.map(([l, r]) => {
    let prev = -1,
      minDiff = Infinity
    for (let v = 1; v <= 100; v++) {
      if (prefix[r + 1][v] - prefix[l][v] > 0) {
        if (prev !== -1) minDiff = Math.min(minDiff, v - prev)
        prev = v
      }
    }
    return minDiff === Infinity ? -1 : minDiff
  })
}
