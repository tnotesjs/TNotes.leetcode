/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 统计第一个单词中每个字符出现的次数
  const minCount = new Array(26).fill(0)
  for (let char of words[0]) {
    minCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 遍历其余单词，更新每个字符的最小出现次数
  for (let i = 1; i < words.length; i++) {
    const currentCount = new Array(26).fill(0)
    // 统计当前单词中每个字符出现的次数
    for (let char of words[i]) {
      currentCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // 更新每个字符在所有单词中的最小出现次数
    for (let j = 0; j < 26; j++) {
      minCount[j] = Math.min(minCount[j], currentCount[j])
    }
  }

  // 根据最小出现次数构建结果数组
  const result = []
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minCount[i]; j++) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)))
    }
  }

  return result
}
// @lc code=end
