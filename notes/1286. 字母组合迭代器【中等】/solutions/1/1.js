/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.combos = []
  const dfs = (start, path) => {
    if (path.length === combinationLength) {
      this.combos.push(path)
      return
    }
    for (let i = start; i < characters.length; i++) {
      dfs(i + 1, path + characters[i])
    }
  }
  dfs(0, '')
  this.idx = 0
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.combos[this.idx++]
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.idx < this.combos.length
}
