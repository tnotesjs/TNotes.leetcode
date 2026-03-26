/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  const count = new Map()
  for (const x of nums) {
    count.set(x, (count.get(x) || 0) + 1)
  }
  const res = []
  for (const [x, c] of count) {
    if (c === 1 && !count.has(x - 1) && !count.has(x + 1)) {
      res.push(x)
    }
  }
  return res
}
