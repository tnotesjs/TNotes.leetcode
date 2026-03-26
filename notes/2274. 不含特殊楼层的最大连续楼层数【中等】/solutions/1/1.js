/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => a - b)
  let res = Math.max(special[0] - bottom, top - special[special.length - 1])
  for (let i = 1; i < special.length; i++) {
    res = Math.max(res, special[i] - special[i - 1] - 1)
  }
  return res
}
