/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  if (changed.length % 2 !== 0) return []
  changed.sort((a, b) => a - b)
  const count = new Map()
  for (const num of changed) count.set(num, (count.get(num) || 0) + 1)
  const result = []
  for (const num of changed) {
    if (count.get(num) <= 0) continue
    if ((count.get(num * 2) || 0) <= 0) return []
    result.push(num)
    count.set(num, count.get(num) - 1)
    count.set(num * 2, count.get(num * 2) - 1)
  }
  return result
}
