/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  // 记录 s 中每个字符的位置
  const posInS = new Map()
  for (let i = 0; i < s.length; i++) {
    posInS.set(s[i], i)
  }

  // 计算排列差
  let diff = 0
  for (let i = 0; i < t.length; i++) {
    diff += Math.abs(posInS.get(t[i]) - i)
  }

  return diff
}
