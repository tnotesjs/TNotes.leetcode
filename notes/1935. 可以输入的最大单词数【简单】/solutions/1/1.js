/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let brokenMask = 0
  for (let i = 0; i < brokenLetters.length; i += 1) {
    brokenMask |= 1 << (brokenLetters.charCodeAt(i) - 97)
  }

  const words = text.split(' ')
  let ans = 0

  for (const w of words) {
    let ok = true
    for (let i = 0; i < w.length; i += 1) {
      if (brokenMask & (1 << (w.charCodeAt(i) - 97))) {
        ok = false
        break
      }
    }
    if (ok) ans += 1
  }

  return ans
}
