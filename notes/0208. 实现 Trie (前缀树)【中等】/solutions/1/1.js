var Trie = function () {
  this.children = {}
  this.isEnd = false
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this
  for (const ch of word) {
    if (!node.children[ch]) node.children[ch] = new Trie()
    node = node.children[ch]
  }
  node.isEnd = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this._searchPrefix(word)
  return node !== null && node.isEnd
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this._searchPrefix(prefix) !== null
}

Trie.prototype._searchPrefix = function (prefix) {
  let node = this
  for (const ch of prefix) {
    if (!node.children[ch]) return null
    node = node.children[ch]
  }
  return node
}
