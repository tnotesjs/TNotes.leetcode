/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const root = {}
  // 构建字典树
  for (const word of words) {
    let node = root
    for (const ch of word) {
      if (!node[ch]) node[ch] = {}
      node = node[ch]
    }
    node.word = word
  }
  const m = board.length,
    n = board[0].length
  const res = []
  function dfs(i, j, node) {
    if (i < 0 || i >= m || j < 0 || j >= n) return
    const ch = board[i][j]
    if (ch === '#' || !node[ch]) return
    node = node[ch]
    if (node.word) {
      res.push(node.word)
      node.word = null // 去重
    }
    board[i][j] = '#'
    dfs(i + 1, j, node)
    dfs(i - 1, j, node)
    dfs(i, j + 1, node)
    dfs(i, j - 1, node)
    board[i][j] = ch
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root)
    }
  }
  return res
}
