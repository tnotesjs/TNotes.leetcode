/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let cur = s
  while (cur.length > k) {
    let next = ''
    for (let i = 0; i < cur.length; i += k) {
      const chunk = cur.slice(i, i + k)
      let sum = 0
      for (const ch of chunk) sum += ch.charCodeAt(0) - 48
      next += sum.toString()
    }
    cur = next
  }
  return cur
}
