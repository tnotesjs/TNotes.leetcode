/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  function backtrack(start, remain, path) {
    if (path.length === k) {
      if (remain === 0) res.push([...path])
      return
    }
    for (let i = start; i <= 9; i++) {
      if (i > remain) break
      path.push(i)
      backtrack(i + 1, remain - i, path)
      path.pop()
    }
  }
  backtrack(1, n, [])
  return res
}
