/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  // 统计 licensePlate 中字母出现次数
  const licenseCount = getCount(licensePlate)

  let result = ''

  // 遍历 words 数组查找最短补全词
  for (const word of words) {
    const wordCount = getCount(word)

    // 检查 word 是否包含 licensePlate 中所有字母且数量足够
    if (isCompletingWord(licenseCount, wordCount)) {
      // 更新最短补全词
      if (!result || word.length < result.length) {
        result = word
      }
    }
  }

  return result
}

// 统计字符串中字母出现次数（忽略大小写）
function getCount(str) {
  const count = new Array(26).fill(0)
  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      const index = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
      count[index]++
    }
  }
  return count
}

// 检查 word 是否是 license 的补全词
function isCompletingWord(licenseCount, wordCount) {
  for (let i = 0; i < 26; i++) {
    if (licenseCount[i] > wordCount[i]) {
      return false
    }
  }
  return true
}
