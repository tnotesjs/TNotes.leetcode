/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
  const banned = new Set(bannedWords)
  let count = 0
  for (const word of message) {
    if (banned.has(word)) {
      count++
      if (count >= 2) return true
    }
  }
  return false
}
