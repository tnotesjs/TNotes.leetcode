/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  // 直接使用哈希表统计 licensePlate 中字母及其出现次数
  const plateMap = new Map()

  // 遍历 licensePlate，统计字母出现次数
  for (const char of licensePlate) {
    if (/[a-zA-Z]/.test(char)) {
      const lowerChar = char.toLowerCase()
      plateMap.set(lowerChar, (plateMap.get(lowerChar) || 0) + 1)
    }
  }

  let result = ''

  // 遍历 words 查找最短补全词
  for (const word of words) {
    // 统计当前单词中字母出现次数
    const wordMap = new Map()
    for (const char of word) {
      const lowerChar = char.toLowerCase()
      wordMap.set(lowerChar, (wordMap.get(lowerChar) || 0) + 1)
    }

    // 检查当前单词是否为补全词
    let isCompleting = true
    for (const [char, count] of plateMap) {
      if ((wordMap.get(char) || 0) < count) {
        isCompleting = false
        break
      }
    }

    // 如果是补全词且长度更短，则更新结果
    if (isCompleting && (!result || word.length < result.length)) {
      result = word
    }
  }

  return result
}
// @lc code=end
