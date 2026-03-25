/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let r = 0,
    c = 0,
    res = ''
  for (const ch of target) {
    const code = ch.charCodeAt(0) - 97
    const tr = Math.floor(code / 5),
      tc = code % 5
    // 先上左再下右，避免走出边界（特别是 z 在最后一行只有 1 列）
    while (r > tr) {
      res += 'U'
      r--
    }
    while (c > tc) {
      res += 'L'
      c--
    }
    while (r < tr) {
      res += 'D'
      r++
    }
    while (c < tc) {
      res += 'R'
      c++
    }
    res += '!'
  }
  return res
}
