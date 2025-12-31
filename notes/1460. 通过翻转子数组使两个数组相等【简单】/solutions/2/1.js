/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  if (target.length !== arr.length) return false
  const count = new Map()
  for (const x of target) {
    count.set(x, (count.get(x) || 0) + 1)
  }
  for (const x of arr) {
    if (!count.has(x)) return false
    const c = count.get(x) - 1
    if (c === 0) count.delete(x)
    else count.set(x, c)
  }
  return count.size === 0
}
