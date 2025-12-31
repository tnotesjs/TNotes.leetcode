/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let mask = 0

  for (let i = 0; i < sentence.length; i += 1) {
    const bit = sentence.charCodeAt(i) - 97 // 'a'
    mask |= 1 << bit
    if (mask === 0x3ffffff) return true
  }

  return mask === 0x3ffffff
}
