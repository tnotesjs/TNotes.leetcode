/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  const cnt = new Map()
  cnt.set(0, 1)
  let mask = 0,
    res = 0
  for (const ch of word) {
    mask ^= 1 << (ch.charCodeAt(0) - 97)
    res += cnt.get(mask) || 0
    for (let i = 0; i < 10; i++) {
      res += cnt.get(mask ^ (1 << i)) || 0
    }
    cnt.set(mask, (cnt.get(mask) || 0) + 1)
  }
  return res
}
