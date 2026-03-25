/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const len = 2 * n - 1
  const res = new Array(len).fill(0)
  const used = new Array(n + 1).fill(false)
  const backtrack = (idx) => {
    if (idx === len) return true
    if (res[idx] !== 0) return backtrack(idx + 1)
    for (let num = n; num >= 1; num--) {
      if (used[num]) continue
      if (num === 1) {
        res[idx] = 1
        used[1] = true
        if (backtrack(idx + 1)) return true
        res[idx] = 0
        used[1] = false
      } else {
        if (idx + num < len && res[idx + num] === 0) {
          res[idx] = num
          res[idx + num] = num
          used[num] = true
          if (backtrack(idx + 1)) return true
          res[idx] = 0
          res[idx + num] = 0
          used[num] = false
        }
      }
    }
    return false
  }
  backtrack(0)
  return res
}
