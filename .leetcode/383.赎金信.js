/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()

  // 统计杂志字符频次
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 检查赎金信字符需求
  for (const char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) {
      return false
    }
    map.set(char, map.get(char) - 1)
  }

  return true
}
// @lc code=end

// #region 1
/* 
arr
- 时间复杂度：O(m + n)，其中m是杂志字符串长度，n是赎金信字符串长度
- 空间复杂度：O(1)，使用了固定大小的数组（26个字母）
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 统计杂志中每个字符的出现次数
  const charCount = new Array(26).fill(0)

  // 遍历杂志字符串，统计字符频次
  for (const char of magazine) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 遍历赎金信字符串，检查字符是否足够
  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    if (charCount[index] === 0) {
      // 字符数量不足，无法构造
      return false
    }
    // 使用一个字符，对应计数减 1
    charCount[index]--
  }

  return true
}
// #endregion

// #region 2
/* 
map
时间复杂度
O(m + n)，其中 m 是杂志字符串长度，n 是赎金信字符串长度，需要遍历两个字符串各一次。

空间复杂度
O(k)，其中 k 是杂志中不同字符的个数，最坏情况下需要存储杂志中所有不同的字符及其频次。
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()

  // 统计杂志字符频次
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 检查赎金信字符需求
  for (const char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) {
      return false
    }
    map.set(char, map.get(char) - 1)
  }

  return true
}
// #endregion
