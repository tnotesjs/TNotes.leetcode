/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function (k, x) {
  const K = BigInt(k)
  // 计算 [1, num] 的累加价值
  const accPrice = (num) => {
    let total = 0n
    const n = BigInt(num)
    for (let p = x; p <= 60; p += x) {
      const cycle = 1n << BigInt(p)
      const half = cycle >> 1n
      total += ((n + 1n) / cycle) * half
      const rem = (n + 1n) % cycle
      if (rem > half) total += rem - half
    }
    return total
  }
  let lo = 1n,
    hi = (K + 1n) << BigInt(x)
  while (lo < hi) {
    const mid = (lo + hi + 1n) >> 1n
    if (accPrice(mid) <= K) lo = mid
    else hi = mid - 1n
  }
  return Number(lo)
}
