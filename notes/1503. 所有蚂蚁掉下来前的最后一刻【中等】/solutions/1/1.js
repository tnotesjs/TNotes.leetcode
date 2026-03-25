/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let res = 0
  for (const l of left) res = Math.max(res, l)
  for (const r of right) res = Math.max(res, n - r)
  return res
}
