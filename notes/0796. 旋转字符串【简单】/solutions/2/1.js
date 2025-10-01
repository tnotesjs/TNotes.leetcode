/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // 长度不同则不可能通过旋转得到
  if (s.length !== goal.length) {
    return false
  }

  // 空字符串的情况
  if (s.length === 0) {
    return true
  }

  // 如果goal可以通过旋转s得到，那么goal一定是s+s的子串
  return (s + s).includes(goal)
  // return (s + s).indexOf(goal) !== -1
}
