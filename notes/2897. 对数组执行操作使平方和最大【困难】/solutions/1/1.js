/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, k) {
  const MOD = 1000000007n
  // 统计每个比特位上 1 的个数
  const cnt = new Array(30).fill(0)
  for (const x of nums) {
    for (let j = 0; j < 30; j++) {
      if (x & (1 << j)) cnt[j]++
    }
  }
  // 贪心构造 k 个最大值，将 1 尽量集中到前 k 个数
  let ans = 0n
  for (let i = 0; i < k; i++) {
    let val = 0n
    for (let j = 0; j < 30; j++) {
      if (cnt[j] > i) val += BigInt(1 << j)
    }
    ans = (ans + val * val) % MOD
  }
  return Number(ans)
}
