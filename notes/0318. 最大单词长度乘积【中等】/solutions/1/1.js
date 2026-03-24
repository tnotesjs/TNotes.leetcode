/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const n = words.length
  const masks = new Array(n)
  for (let i = 0; i < n; i++) {
    masks[i] = 0
    for (const ch of words[i]) masks[i] |= 1 << (ch.charCodeAt(0) - 97)
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((masks[i] & masks[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length)
      }
    }
  }
  return res
}
