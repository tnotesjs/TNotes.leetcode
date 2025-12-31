/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const diff = new Array(52).fill(0) // 索引到 51，处理 r+1

  for (const [l, r] of ranges) {
    diff[l] += 1
    diff[r + 1] -= 1
  }

  let cover = 0
  for (let i = 1; i <= 50; i += 1) {
    cover += diff[i]
    if (i >= left && i <= right && cover === 0) return false
  }
  return true
}
