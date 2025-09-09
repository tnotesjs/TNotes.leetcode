/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 统计杂志中每个字符的出现次数
  const charCount = new Array(26).fill(0)

  // 遍历杂志字符串，统计字符频次
  for (const char of magazine) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 遍历赎金信字符串，检查字符是否足够
  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    if (charCount[index] === 0) {
      // 字符数量不足，无法构造
      return false
    }
    // 使用一个字符，对应计数减 1
    charCount[index]--
  }

  return true
}
