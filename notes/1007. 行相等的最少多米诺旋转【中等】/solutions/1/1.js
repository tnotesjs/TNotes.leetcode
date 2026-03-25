/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const n = tops.length
  const check = (target) => {
    let rotTop = 0
    let rotBot = 0
    for (let i = 0; i < n; i++) {
      if (tops[i] !== target && bottoms[i] !== target) return Infinity
      if (tops[i] !== target) rotTop++
      if (bottoms[i] !== target) rotBot++
    }
    return Math.min(rotTop, rotBot)
  }
  const res = Math.min(check(tops[0]), check(bottoms[0]))
  return res === Infinity ? -1 : res
}
