/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(' ')
  const ordered = new Array(words.length)

  for (const word of words) {
    // 提取位置索引
    const pos = word.charCodeAt(word.length - 1) - 49 // '1' -> 0
    // 放置单词到正确位置，并去掉单词末尾数字索引
    ordered[pos] = word.slice(0, word.length - 1)
  }

  return ordered.join(' ')
}
