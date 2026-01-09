/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  // 统计chars中每个字符的出现次数
  const charsCount = new Array(26).fill(0)
  for (let char of chars) {
    charsCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let result = 0

  // 检查每个单词是否可以被拼出
  for (let word of words) {
    if (canFormWord(word, charsCount)) {
      result += word.length
    }
  }

  return result
}

// 辅助函数：检查单词是否可以由给定字符拼出
function canFormWord(word, charsCount) {
  // 统计单词中每个字符的出现次数
  const wordCount = new Array(26).fill(0)
  for (let char of word) {
    wordCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 检查每个字符的数量是否满足要求
  for (let i = 0; i < 26; i++) {
    if (wordCount[i] > charsCount[i]) {
      return false
    }
  }

  return true
}
// map 版本：
/* 
var countCharacters = function (words, chars) {
  // 统计chars中每个字符的出现次数
  const charsCount = new Map()
  for (let char of chars) {
    charsCount.set(char, (charsCount.get(char) || 0) + 1)
  }

  let result = 0

  // 检查每个单词是否可以被拼出
  for (let word of words) {
    if (canFormWord(word, charsCount)) {
      result += word.length
    }
  }

  return result
}

// 辅助函数：检查单词是否可以由给定字符拼出
function canFormWord(word, charsCount) {
  // 统计单词中每个字符的出现次数
  const wordCount = new Map()
  for (let char of word) {
    wordCount.set(char, (wordCount.get(char) || 0) + 1)
  }

  // 检查每个字符的数量是否满足要求
  for (let [char, count] of wordCount) {
    if ((charsCount.get(char) || 0) < count) {
      return false
    }
  }

  return true
}
*/
