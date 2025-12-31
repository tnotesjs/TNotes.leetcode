/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let time = 0
  let cur = 0 // 'a'

  for (let i = 0; i < word.length; i += 1) {
    const nxt = word.charCodeAt(i) - 97
    const diff = Math.abs(cur - nxt)
    time += Math.min(diff, 26 - diff) + 1 // move + type
    cur = nxt
  }

  return time
}
