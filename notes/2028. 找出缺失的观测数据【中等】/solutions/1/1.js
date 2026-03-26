/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length
  const total = mean * (n + m)
  let observed = 0
  for (const r of rolls) observed += r
  let remaining = total - observed
  if (remaining < n || remaining > 6 * n) return []
  const result = new Array(n).fill(1)
  remaining -= n
  for (let i = 0; i < n && remaining > 0; i++) {
    const add = Math.min(remaining, 5)
    result[i] += add
    remaining -= add
  }
  return result
}
