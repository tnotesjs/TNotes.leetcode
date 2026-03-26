/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function (x, y, z) {
  // AA 和 BB 交替排列，最多用 min(x,y) + min(x,y) 或者多用一个
  // AB 可以插在任何位置
  const m = Math.min(x, y)
  return (m * 2 + (x !== y ? 1 : 0) + z) * 2
}
