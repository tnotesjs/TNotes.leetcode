/**
 * @param {number} k
 * @return {string}
 */
var kthCharacter = function (k) {
  // k 的二进制中 1 的个数决定了字符的偏移量
  // 每次操作将字符串长度翻倍，新增部分的每个字符是原字符 + 1
  // 第 k 个字符的值 = 'a' + (k-1 的二进制中 1 的个数)
  const ones = (k - 1).toString(2).split('1').length - 1
  return String.fromCharCode('a'.charCodeAt(0) + ones)
}
