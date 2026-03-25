/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let res = 0
  const backtrack = (idx, used) => {
    if (idx === s.length) {
      res = Math.max(res, used.size)
      return
    }
    for (let i = idx + 1; i <= s.length; i++) {
      const sub = s.slice(idx, i)
      if (!used.has(sub)) {
        used.add(sub)
        backtrack(i, used)
        used.delete(sub)
      }
    }
  }
  backtrack(0, new Set())
  return res
}
