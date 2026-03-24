var MagicDictionary = function () {
  this.words = []
}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.words = dictionary
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  for (const word of this.words) {
    if (word.length !== searchWord.length) continue
    let diff = 0
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== searchWord[i]) diff++
      if (diff > 1) break
    }
    if (diff === 1) return true
  }
  return false
}
