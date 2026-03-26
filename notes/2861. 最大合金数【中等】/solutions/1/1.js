/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
  let ans = 0
  for (let m = 0; m < k; m++) {
    let lo = 0, hi = 2e8
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      let totalCost = 0, ok = true
      for (let j = 0; j < n; j++) {
        const need = Math.max(0, mid * composition[m][j] - stock[j])
        totalCost += need * cost[j]
        if (totalCost > budget) { ok = false; break }
      }
      if (ok) { ans = Math.max(ans, mid); lo = mid + 1 }
      else hi = mid - 1
    }
  }
  return ans
}
