/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  // 将模式串按 '*' 分割为前缀和后缀
  const [prefix, suffix] = p.split('*')

  // 在 s 中找 prefix 的位置
  const prefixIdx = s.indexOf(prefix)
  if (prefixIdx === -1) return false

  // 从 prefix 结束位置开始找 suffix
  const suffixIdx = s.indexOf(suffix, prefixIdx + prefix.length)
  if (suffixIdx === -1) return false

  return true
}
