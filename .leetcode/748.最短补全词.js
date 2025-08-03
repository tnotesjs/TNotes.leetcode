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
  // 使用哈希表统计 licensePlate 中字母出现次数
  const licenseCount = getCountWithMap(licensePlate)

  let result = ''

  // 遍历 words 数组查找最短补全词
  for (const word of words) {
    const wordCount = getCountWithMap(word)

    // 检查 word 是否包含 licensePlate 中所有字母且数量足够
    if (isCompletingWordWithMap(licenseCount, wordCount)) {
      // 更新最短补全词
      if (!result || word.length < result.length) {
        result = word
      }
    }
  }

  return result
}

// 使用哈希表统计字符串中字母出现次数（忽略大小写）
function getCountWithMap(str) {
  const count = new Map()
  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      const lowerChar = char.toLowerCase()
      count.set(lowerChar, (count.get(lowerChar) || 0) + 1)
    }
  }
  return count
}

// 使用哈希表检查 word 是否是 license 的补全词
function isCompletingWordWithMap(licenseCount, wordCount) {
  for (const [char, neededCount] of licenseCount) {
    if ((wordCount.get(char) || 0) < neededCount) {
      return false
    }
  }
  return true
}
// @lc code=end
