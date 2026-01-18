/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  // 枚举删除每个位置的字符
  for (let i = 0; i < word.length; i++) {
    // 删除第 i 个字符后的字符串
    const newWord = word.slice(0, i) + word.slice(i + 1)

    // 统计删除后每个字符的频率
    const freq = new Map()
    for (const char of newWord) {
      freq.set(char, (freq.get(char) || 0) + 1)
    }

    // 检查所有频率是否相同
    const frequencies = Array.from(freq.values())
    if (
      frequencies.length === 0 ||
      frequencies.every((f) => f === frequencies[0])
    ) {
      return true
    }
  }

  return false
}
