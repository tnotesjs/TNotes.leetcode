/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  // 车和皇后同行，且象不在中间阻挡
  if (a === e && !(c === a && Math.min(b, f) < d && d < Math.max(b, f)))
    return 1
  // 车和皇后同列，且象不在中间阻挡
  if (b === f && !(d === b && Math.min(a, e) < c && c < Math.max(a, e)))
    return 1
  // 象和皇后同对角线，且车不在中间阻挡
  if (Math.abs(c - e) === Math.abs(d - f)) {
    let blocked
    if (c - d === e - f) {
      blocked = a - b === c - d && Math.min(c, e) < a && a < Math.max(c, e)
    } else {
      blocked = a + b === c + d && Math.min(c, e) < a && a < Math.max(c, e)
    }
    if (!blocked) return 1
  }
  return 2
}
