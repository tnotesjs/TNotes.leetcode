/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length
  const wordSet = new Set(wordDict)

  // dp[i] = true 表示 s[0..i-1] 可被字典中的单词拆分
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  const res = []
  const path = []
  const dfs = (start) => {
    if (start === n) {
      res.push(path.join(' '))
      return
    }
    for (let end = start + 1; end <= n; end++) {
      // 剪枝：只走 dp[end] 可达的分支
      if (dp[end] && wordSet.has(s.slice(start, end))) {
        path.push(s.slice(start, end))
        dfs(end)
        path.pop()
      }
    }
  }
  dfs(0)
  return res
}
