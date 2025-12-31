/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1
  }
  return -1
}

// 不使用内置方法：
/* 
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    // 手动检查是否以 searchWord 开头
    if (word.length >= searchWord.length) {
      let isPrefix = true

      for (let j = 0; j < searchWord.length; j++) {
        if (word[j] !== searchWord[j]) {
          isPrefix = false
          break
        }
      }

      if (isPrefix) {
        return i + 1 // 返回从1开始的索引
      }
    }
  }

  return -1 // 没有找到匹配的单词
}
*/
