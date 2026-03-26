/**
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function(nums) {
  const cnt = new Map()
  for (const x of nums) cnt.set(x, (cnt.get(x) || 0) + 1)
  const freqs = [...cnt.values()]
  const minFreq = Math.min(...freqs)

  for (let k = minFreq; k >= 1; k--) {
    let total = 0
    let valid = true
    for (const f of freqs) {
      const g = Math.ceil(f / (k + 1))
      if (g * k > f) { valid = false; break }
      total += g
    }
    if (valid) return total
  }
  return nums.length
}
