/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
  const n = target.length
  // 构建 Trie
  const trie = [{}]
  for (const w of words) {
    let node = 0
    for (let i = 0; i < w.length && i < n; i++) {
      const c = w[i]
      if (!trie[node][c]) {
        trie[node][c] = trie.length
        trie.push({})
      }
      node = trie[node][c]
    }
  }
  // dp[i] = 形成 target[0..i-1] 的最少字符串数
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    if (dp[i] === Infinity) continue
    let node = 0
    for (let j = i; j < n; j++) {
      const c = target[j]
      if (!trie[node][c]) break
      node = trie[node][c]
      dp[j + 1] = Math.min(dp[j + 1], dp[i] + 1)
    }
  }
  return dp[n] === Infinity ? -1 : dp[n]
}
