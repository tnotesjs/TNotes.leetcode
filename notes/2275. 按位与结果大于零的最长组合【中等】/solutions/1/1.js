/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let res = 0
  for (let bit = 0; bit < 24; bit++) {
    let cnt = 0
    for (const num of candidates) {
      if (num & (1 << bit)) cnt++
    }
    res = Math.max(res, cnt)
  }
  return res
}
