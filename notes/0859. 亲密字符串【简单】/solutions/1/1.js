/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // 长度不相等直接返回 false
  if (s.length !== goal.length) {
    return false
  }

  // 如果两个字符串相等，检查是否存在重复字符
  if (s === goal) {
    // 使用 Set 检查是否有重复字符
    const uniqueChars = new Set(s)
    return uniqueChars.size < s.length
  }

  // 找到所有不同的字符位置
  const diff = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i)
    }
  }

  // 必须恰好有两个不同的位置，且交换后相等
  return (
    diff.length === 2 &&
    s[diff[0]] === goal[diff[1]] &&
    s[diff[1]] === goal[diff[0]]
  )
}
