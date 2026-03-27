/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
  // 计算 [1, num] 中强大整数的数量
  function count(num) {
    const numStr = String(num)
    const d = numStr.length,
      sLen = s.length
    if (d < sLen) return 0
    let total = 0
    // 统计长度 < d 的强大整数
    for (let k = sLen; k < d; k++) {
      const p = k - sLen
      if (p === 0) total += 1
      else total += limit * (limit + 1) ** (p - 1)
    }
    // 统计长度 = d 的强大整数
    const p = d - sLen
    if (p === 0) {
      if (s <= numStr) total += 1
    } else {
      let tight = true
      for (let i = 0; i < p; i++) {
        const di = +numStr[i]
        const lo = i === 0 ? 1 : 0
        const hi = Math.min(di - 1, limit)
        if (hi >= lo) total += (hi - lo + 1) * (limit + 1) ** (p - 1 - i)
        if (di > limit) {
          tight = false
          break
        }
      }
      if (tight) {
        // 前缀每位都 <= limit，检查后缀
        const numSuf = numStr.slice(p)
        if (s <= numSuf) total += 1
      }
    }
    return total
  }
  return count(finish) - count(start - 1)
}
