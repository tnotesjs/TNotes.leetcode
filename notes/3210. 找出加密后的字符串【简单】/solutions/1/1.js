/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  const n = s.length
  k = k % n // 处理 k 大于字符串长度的情况

  // 每个位置 i 的字符被替换为位置 (i + k) % n 的字符
  // 等价于将字符串向左循环移动 k 位
  return s.slice(k) + s.slice(0, k)
}
