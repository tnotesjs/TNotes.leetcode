/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length
  const res = []
  // dp[i][j] 表示 s[i..j] 是否为回文串
  const dp = Array.from({ length: n }, () => Array(n).fill(true))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
    }
  }
  function backtrack(start, path) {
    if (start === n) {
      res.push([...path])
      return
    }
    for (let end = start; end < n; end++) {
      if (dp[start][end]) {
        path.push(s.slice(start, end + 1))
        backtrack(end + 1, path)
        path.pop()
      }
    }
  }
  backtrack(0, [])
  return res
}
