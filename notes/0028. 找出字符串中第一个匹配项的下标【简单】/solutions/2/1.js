/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length
  const m = needle.length

  if (m === 0) return 0 // 特殊情况处理：空字符串

  for (let i = 0; i <= n - m; i++) {
    // 外层循环遍历主串
    let match = true
    for (let j = 0; j < m; j++) {
      // 内层循环检查子串是否匹配
      if (haystack[i + j] !== needle[j]) {
        match = false
        break
      }
    }
    if (match) return i // 如果匹配成功，返回起始索引
  }

  return -1 // 如果没有找到匹配的子串，返回 -1
}
