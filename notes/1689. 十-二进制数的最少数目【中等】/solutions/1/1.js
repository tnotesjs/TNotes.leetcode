/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let res = 0
  for (const c of n) {
    res = Math.max(res, +c)
  }
  return res
}
