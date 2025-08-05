/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  // 将字符串转换为标准化形式（去重并排序的字符序列）
  const normalize = (word) => {
    return [...new Set(word)].sort().join('')
  }

  let count = 0

  // 比较每对字符串
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (normalize(words[i]) === normalize(words[j])) {
        count++
      }
    }
  }

  return count
}
