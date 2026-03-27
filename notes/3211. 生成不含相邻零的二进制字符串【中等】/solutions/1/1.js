/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
  const res = []
  const backtrack = (path) => {
    if (path.length === n) {
      res.push(path)
      return
    }
    // 可以加 '1'
    backtrack(path + '1')
    // 加 '0' 的条件：上一位不是 '0'
    if (path.length === 0 || path[path.length - 1] !== '0') {
      backtrack(path + '0')
    }
  }
  backtrack('')
  return res
}
