/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let current = 0 // 当前占用的椅子数
  let maxChairs = 0 // 最大占用椅子数

  for (const c of s) {
    if (c === 'E') {
      current++
      maxChairs = Math.max(maxChairs, current)
    } else {
      current--
    }
  }

  return maxChairs
}
