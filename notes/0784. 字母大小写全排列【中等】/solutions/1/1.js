/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const res = []
  const dfs = (i, path) => {
    if (i === s.length) {
      res.push(path)
      return
    }
    const c = s[i]
    if (c >= '0' && c <= '9') {
      dfs(i + 1, path + c)
    } else {
      dfs(i + 1, path + c.toLowerCase())
      dfs(i + 1, path + c.toUpperCase())
    }
  }
  dfs(0, '')
  return res
}
