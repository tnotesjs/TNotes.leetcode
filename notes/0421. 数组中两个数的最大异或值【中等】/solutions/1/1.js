/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let max = 0,
    mask = 0
  for (let i = 31; i >= 0; i--) {
    mask |= 1 << i
    const set = new Set()
    for (const num of nums) set.add(num & mask)
    const candidate = max | (1 << i)
    for (const prefix of set) {
      if (set.has(prefix ^ candidate)) {
        max = candidate
        break
      }
    }
  }
  return max
}
