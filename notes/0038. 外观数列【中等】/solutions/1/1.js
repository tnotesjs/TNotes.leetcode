/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let cur = '1'

  for (let i = 1; i < n; i++) {
    let next = ''
    let j = 0
    while (j < cur.length) {
      const ch = cur[j]
      let cnt = 0
      while (j < cur.length && cur[j] === ch) {
        j++
        cnt++
      }
      next += cnt + ch
    }
    cur = next
  }

  return cur
}
