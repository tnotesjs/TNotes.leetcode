/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
  // 二分答案 t：在 t 秒内所有工人能降低的总高度 >= mountainHeight
  // 工人 i 在 t 秒内能降低 x：workerTimes[i] * x * (x+1) / 2 <= t
  // x = floor((-1 + sqrt(1 + 8*t/workerTimes[i])) / 2)
  let lo = 0n, hi = BigInt(mountainHeight) * BigInt(mountainHeight) * BigInt(Math.max(...workerTimes))
  while (lo < hi) {
    const mid = (lo + hi) / 2n
    let total = 0n
    for (const wt of workerTimes) {
      // x = floor((-1 + sqrt(1 + 8*mid/wt)) / 2)
      const w = BigInt(wt)
      // 8*mid/w 可能很大，用二分求 x
      let xlo = 0n, xhi = BigInt(mountainHeight)
      while (xlo < xhi) {
        const xmid = (xlo + xhi + 1n) / 2n
        if (w * xmid * (xmid + 1n) / 2n <= mid) xlo = xmid
        else xhi = xmid - 1n
      }
      total += xlo
      if (total >= BigInt(mountainHeight)) break
    }
    if (total >= BigInt(mountainHeight)) hi = mid
    else lo = mid + 1n
  }
  return Number(lo)
}
