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

  // 如果两个字符串相同，直接返回true
  if (s === goal) {
    return true
  }

  // 模拟所有可能的旋转
  let rotated = s
  for (let i = 0; i < s.length; i++) {
    // 执行一次旋转操作：将第一个字符移到末尾
    rotated = rotated.substring(1) + rotated[0]
    if (rotated === goal) {
      return true
    }
  }

  return false
}
