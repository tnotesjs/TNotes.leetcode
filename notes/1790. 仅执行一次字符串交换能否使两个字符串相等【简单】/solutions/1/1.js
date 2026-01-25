/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  // 记录两个字符串中不匹配字符的位置索引
  const diff = []

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) diff.push(i)
    if (diff.length > 2) return false
  }

  if (diff.length === 0) return true
  if (diff.length !== 2) return false

  // 检查交换 s1 中 i,j 位置的字符后是否等于 s2 对应位置的字符
  const [i, j] = diff
  return s1[i] === s2[j] && s1[j] === s2[i]
}
