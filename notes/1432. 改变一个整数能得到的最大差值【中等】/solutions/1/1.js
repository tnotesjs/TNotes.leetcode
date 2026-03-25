/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const s = String(num)
  // 求最大值：找第一个不是 9 的数字，全部替换为 9
  let maxStr = s
  for (const ch of s) {
    if (ch !== '9') {
      maxStr = s.replaceAll(ch, '9')
      break
    }
  }
  // 求最小值：若首位不是 1，将首位数字全替换为 1；否则找第一个不是 0 且不是 1 的数字，替换为 0
  let minStr = s
  if (s[0] !== '1') {
    minStr = s.replaceAll(s[0], '1')
  } else {
    for (let i = 1; i < s.length; i++) {
      if (s[i] !== '0' && s[i] !== '1') {
        minStr = s.replaceAll(s[i], '0')
        break
      }
    }
  }
  return Number(maxStr) - Number(minStr)
}
