/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // 将字符串 s 按空格分割成单词数组
  const words = s.split(' ')

  // 如果 pattern 的长度与单词数量不一致，直接返回 false
  if (pattern.length !== words.length) return false

  // 建立双向映射关系
  const charToWord = new Map() // 字符到单词的映射
  const wordToChar = new Map() // 单词到字符的映射

  // 遍历 pattern 和 words，建立映射关系
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]

    // 检查字符到单词的映射
    if (charToWord.has(char)) {
      // 如果字符已有映射但与当前单词不一致，返回 false
      if (charToWord.get(char) !== word) {
        return false
      }
    } else {
      // 建立新的映射
      charToWord.set(char, word)
    }

    // 检查单词到字符的映射
    if (wordToChar.has(word)) {
      // 如果单词已有映射但与当前字符不一致，返回 false
      if (wordToChar.get(word) !== char) {
        return false
      }
    } else {
      // 建立新的映射
      wordToChar.set(word, char)
    }
  }

  return true
}
// @lc code=end
