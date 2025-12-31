/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const toNum = (s) => {
    let res = ''
    for (const ch of s) {
      res += ch.charCodeAt(0) - 97
    }
    return Number(res)
  }

  return toNum(firstWord) + toNum(secondWord) === toNum(targetWord)
}
