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

// #region
// solutions.1 - 暴力解法
// 1.arr.js
// 时间复杂度：$O(N + M)$，其中N是licensePlate的长度，M是所有words的长度总和
// 空间复杂度：$O(1)$，只使用了固定大小的数组（26个字母）
// /**
//  * @param {string} licensePlate
//  * @param {string[]} words
//  * @return {string}
//  */
// var shortestCompletingWord = function (licensePlate, words) {
//   // 统计licensePlate中字母的频次
//   const licenseCount = getCount(licensePlate.toLowerCase())

//   let result = ''

//   // 遍历words数组找到最短补全词
//   for (const word of words) {
//     const wordCount = getCount(word)

//     // 检查word是否为补全词
//     if (isCompleting(licenseCount, wordCount)) {
//       // 如果是第一个补全词或比当前结果更短，则更新结果
//       if (result === '' || word.length < result.length) {
//         result = word
//       }
//     }
//   }

//   return result
// }

// // 统计字符串中字母的频次
// function getCount(str) {
//   const count = new Array(26).fill(0)
//   for (const char of str) {
//     if (char >= 'a' && char <= 'z') {
//       count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
//     }
//   }
//   return count
// }

// // 检查word是否为licensePlate的补全词
// function isCompleting(licenseCount, wordCount) {
//   for (let i = 0; i < 26; i++) {
//     if (licenseCount[i] > wordCount[i]) {
//       return false
//     }
//   }
//   return true
// }
// #endregion

// #region
// solutions.1 - 暴力解法
// 1.map.js
// 也可以改用 map 来统计每个字母的出现次数
// /**
//  * @param {string} licensePlate
//  * @param {string[]} words
//  * @return {string}
//  */
// var shortestCompletingWord = function (licensePlate, words) {
//   // 使用哈希表统计 licensePlate 中字母出现次数
//   const licenseCount = getCountWithMap(licensePlate)

//   let result = ''

//   // 遍历 words 数组查找最短补全词
//   for (const word of words) {
//     const wordCount = getCountWithMap(word)

//     // 检查 word 是否包含 licensePlate 中所有字母且数量足够
//     if (isCompletingWordWithMap(licenseCount, wordCount)) {
//       // 更新最短补全词
//       if (!result || word.length < result.length) {
//         result = word
//       }
//     }
//   }

//   return result
// }

// // 使用哈希表统计字符串中字母出现次数（忽略大小写）
// function getCountWithMap(str) {
//   const count = new Map()
//   for (const char of str) {
//     if (/[a-zA-Z]/.test(char)) {
//       const lowerChar = char.toLowerCase()
//       count.set(lowerChar, (count.get(lowerChar) || 0) + 1)
//     }
//   }
//   return count
// }

// // 使用哈希表检查 word 是否是 license 的补全词
// function isCompletingWordWithMap(licenseCount, wordCount) {
//   for (const [char, neededCount] of licenseCount) {
//     if ((wordCount.get(char) || 0) < neededCount) {
//       return false
//     }
//   }
//   return true
// }
// #endregion
