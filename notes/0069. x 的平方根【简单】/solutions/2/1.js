/**
 * 牛顿法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0

  let r = x
  while (r > x / r) {
    r = Math.floor((r + x / r) / 2)
  }

  return r
}
