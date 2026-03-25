/**
 * @param {number} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
  let res = 0,
    prev = 0
  for (const r of rungs) {
    if (r - prev > dist) {
      res += Math.ceil((r - prev) / dist) - 1
    }
    prev = r
  }
  return res
}
