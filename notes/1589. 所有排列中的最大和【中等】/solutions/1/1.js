/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function (nums, requests) {
  const MOD = 1e9 + 7
  const n = nums.length
  const diff = new Array(n + 1).fill(0)
  for (const [s, e] of requests) {
    diff[s]++
    diff[e + 1]--
  }
  // 计算每个位置被查询的次数
  const freq = new Array(n)
  freq[0] = diff[0]
  for (let i = 1; i < n; i++) freq[i] = freq[i - 1] + diff[i]
  freq.sort((a, b) => a - b)
  nums.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < n; i++) res = (res + nums[i] * freq[i]) % MOD
  return res
}
