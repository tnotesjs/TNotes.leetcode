/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function (stations, r, k) {
  const n = stations.length
  const ps = new Float64Array(n + 1)
  for (let i = 0; i < n; i++) ps[i + 1] = ps[i] + stations[i]
  const initPower = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    const left = Math.max(0, i - r)
    const right = Math.min(n - 1, i + r)
    initPower[i] = ps[right + 1] - ps[left]
  }

  const check = (minP) => {
    const diff = new Float64Array(n + 1)
    let addSum = 0,
      remain = k
    for (let i = 0; i < n; i++) {
      addSum += diff[i]
      const cur = initPower[i] + addSum
      if (cur < minP) {
        const need = minP - cur
        if (need > remain) return false
        remain -= need
        addSum += need
        const endIdx = i + 2 * r + 1
        if (endIdx <= n) diff[endIdx] -= need
      }
    }
    return true
  }

  let lo = 0,
    hi = 0
  for (let i = 0; i < n; i++) hi += stations[i]
  hi += k
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2)
    if (check(mid)) lo = mid
    else hi = mid - 1
  }
  return lo
}
