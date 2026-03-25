/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  const xc = String(x)
  if (n[0] === '-') {
    // 负数：找第一个大于 x 的位置插入
    for (let i = 1; i < n.length; i++) {
      if (n[i] > xc) {
        return n.slice(0, i) + xc + n.slice(i)
      }
    }
    return n + xc
  } else {
    // 正数：找第一个小于 x 的位置插入
    for (let i = 0; i < n.length; i++) {
      if (n[i] < xc) {
        return n.slice(0, i) + xc + n.slice(i)
      }
    }
    return n + xc
  }
}
