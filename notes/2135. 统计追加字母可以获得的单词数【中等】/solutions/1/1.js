/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  const set = new Set()
  for (const w of startWords) {
    let mask = 0
    for (const c of w) mask |= 1 << (c.charCodeAt(0) - 97)
    set.add(mask)
  }
  let res = 0
  for (const w of targetWords) {
    let mask = 0
    for (const c of w) mask |= 1 << (c.charCodeAt(0) - 97)
    for (const c of w) {
      const bit = 1 << (c.charCodeAt(0) - 97)
      if (set.has(mask ^ bit)) {
        res++
        break
      }
    }
  }
  return res
}
