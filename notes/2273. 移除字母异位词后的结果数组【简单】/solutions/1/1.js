/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  // 辅助函数：判断两个单词是否为字母异位词
  const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
      return false
    }

    // 统计字符出现次数
    const count = new Array(26).fill(0)
    for (let i = 0; i < word1.length; i++) {
      count[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++
      count[word2.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    // 检查是否所有字符计数都为 0
    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
        return false
      }
    }

    return true
  }

  const result = [words[0]] // 第一个单词总是保留

  // 从第二个单词开始检查
  for (let i = 1; i < words.length; i++) {
    // 如果当前单词与前一个保留的单词不是字母异位词，则保留
    if (!isAnagram(words[i], result[result.length - 1])) {
      result.push(words[i])
    }
  }

  return result
}
