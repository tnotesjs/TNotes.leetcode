/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  arr.sort((a, b) => Math.abs(a) - Math.abs(b))
  const count = new Map()
  for (const x of arr) count.set(x, (count.get(x) || 0) + 1)

  for (const x of arr) {
    if (count.get(x) === 0) continue
    count.set(x, count.get(x) - 1)
    if ((count.get(2 * x) || 0) === 0) return false
    count.set(2 * x, count.get(2 * x) - 1)
  }

  return true
}
