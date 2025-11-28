/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length

  if (m === 0) return 0

  // 初始化 next
  const next = new Array(m).fill(0)
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[j] !== needle[i]) j = next[j - 1] // j 收缩
    if (needle[i] === needle[j]) j++ // j 扩散
    next[i] = j // 更新 next[i]
  }

  // 查找匹配项
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && needle[j] !== haystack[i]) j = next[j - 1]
    if (haystack[i] === needle[j]) j++
    if (j === m) return i - m + 1
  }

  return -1
}
