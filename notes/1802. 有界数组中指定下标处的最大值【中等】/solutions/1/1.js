/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  // 计算以 val 为峰值时的最小总和
  const calc = (val, cnt) => {
    if (val >= cnt) {
      // 从 val 到 val-cnt+1 的等差数列
      return ((val + val - cnt + 1) * cnt) / 2
    } else {
      // val 到 1 的等差数列 + 剩余全是 1
      return (val * (val + 1)) / 2 + (cnt - val)
    }
  }
  let lo = 1,
    hi = maxSum
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2)
    const left = calc(mid, index + 1)
    const right = calc(mid, n - index)
    if (left + right - mid <= maxSum) {
      lo = mid
    } else {
      hi = mid - 1
    }
  }
  return lo
}
