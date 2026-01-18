/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  // 检查偶数位置（0, 2）的字符集合是否相同
  const even1 = [s1[0], s1[2]].sort().join('')
  const even2 = [s2[0], s2[2]].sort().join('')

  // 检查奇数位置（1, 3）的字符集合是否相同
  const odd1 = [s1[1], s1[3]].sort().join('')
  const odd2 = [s2[1], s2[3]].sort().join('')

  return even1 === even2 && odd1 === odd2
}
