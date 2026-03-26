/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)
  const m = potions.length
  const res = new Array(spells.length)
  for (let i = 0; i < spells.length; i++) {
    let lo = 0,
      hi = m
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (potions[mid] * 1.0 * spells[i] >= success) hi = mid
      else lo = mid + 1
    }
    res[i] = m - lo
  }
  return res
}
