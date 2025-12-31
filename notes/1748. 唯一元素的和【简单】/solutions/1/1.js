/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const freq = new Map()

  for (const v of nums) {
    freq.set(v, (freq.get(v) || 0) + 1)
  }

  let sum = 0
  for (const [v, c] of freq) {
    if (c === 1) sum += v
  }
  return sum
}
