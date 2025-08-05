/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // 将 allowed 字符串转换为 Set，便于快速查找
  const allowedSet = new Set(allowed)

  // 使用 every 方法检查每个单词是否为一致字符串
  return words.filter((word) =>
    word.split('').every((char) => allowedSet.has(char))
  ).length
}
