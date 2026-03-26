/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const MOD = 1000000007n
  const n = nums.length
  // 计算质数分数
  const ps = new Array(n)
  for (let i = 0; i < n; i++) {
    let x = nums[i],
      score = 0
    for (let p = 2; p * p <= x; p++) {
      if (x % p === 0) {
        score++
        while (x % p === 0) x = Math.floor(x / p)
      }
    }
    if (x > 1) score++
    ps[i] = score
  }
  // 单调栈找每个元素的支配区间
  const left = new Array(n),
    right = new Array(n).fill(n)
  const stk = []
  for (let i = 0; i < n; i++) {
    while (stk.length && ps[stk[stk.length - 1]] < ps[i]) right[stk.pop()] = i
    left[i] = stk.length ? stk[stk.length - 1] : -1
    stk.push(i)
  }
  const power = (base, exp, mod) => {
    let result = 1n
    base = BigInt(base) % mod
    exp = BigInt(exp)
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % mod
      base = (base * base) % mod
      exp >>= 1n
    }
    return result
  }
  const indices = Array.from({ length: n }, (_, i) => i)
  indices.sort((a, b) => nums[b] - nums[a])
  let ans = 1n,
    remaining = k
  for (const i of indices) {
    if (remaining <= 0) break
    const count = (i - left[i]) * (right[i] - i)
    const use = Math.min(count, remaining)
    ans = (ans * power(nums[i], use, MOD)) % MOD
    remaining -= use
  }
  return Number(ans)
}
