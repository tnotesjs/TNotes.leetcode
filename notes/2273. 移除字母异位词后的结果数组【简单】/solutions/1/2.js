/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  // 将单词的字符排序，用于判断是否为字母异位词
  const sorted = (word) => word.split('').sort().join('')

  const result = [words[0]] // 第一个单词总是保留

  // 从第二个单词开始检查
  for (let i = 1; i < words.length; i++) {
    // 如果当前单词与前一个保留的单词不是字母异位词，则保留
    if (sorted(words[i]) !== sorted(result[result.length - 1])) {
      result.push(words[i])
    }
  }

  return result
}
