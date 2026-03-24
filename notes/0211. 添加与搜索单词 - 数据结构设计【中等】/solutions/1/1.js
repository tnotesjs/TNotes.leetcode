var WordDictionary = function () {
  this.children = {}
  this.isEnd = false
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this
  for (const ch of word) {
    if (!node.children[ch]) node.children[ch] = new WordDictionary()
    node = node.children[ch]
  }
  node.isEnd = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(node, i) {
    if (i === word.length) return node.isEnd
    if (word[i] === '.') {
      for (const key in node.children) {
        if (dfs(node.children[key], i + 1)) return true
      }
      return false
    }
    if (!node.children[word[i]]) return false
    return dfs(node.children[word[i]], i + 1)
  }
  return dfs(this, 0)
}
