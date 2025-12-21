/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let count = 0
  // 统一转换为小写进行比较，忽略大小写差异
  s = s.toLowerCase()
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      count++
    }
  }
  return count
}
