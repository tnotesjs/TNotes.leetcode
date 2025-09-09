/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 第一次遍历：统计每个字符的出现次数
  const charCount = new Array(26).fill(0)

  for (const char of s) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 第二次遍历：找到第一个出现次数为1的字符
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
      return i
    }
  }

  return -1
}
// @lc code=end

// #region 1
/* 
- 数组解法
- 时间复杂度：O(n)，需要遍历字符串两次
- 空间复杂度：O(1)，使用了固定大小的数组（26个字母）
- 使用数组来统计字符出现的次数
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 第一次遍历：统计每个字符的出现次数
  const charCount = new Array(26).fill(0)

  for (const char of s) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 第二次遍历：找到第一个出现次数为1的字符
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
      return i
    }
  }

  return -1
}
// #endregion

// #region 2
/* 
- map 两次遍历
- 时间复杂度：O(n)，需要遍历字符串两次，每次遍历都是O(n)
- 空间复杂度：O(k)，其中k是字符串中不同字符的个数，最坏情况下需要存储所有不同字符及其频次
- 使用 map 统计字符出现的次数
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 统计字符频次
  const map = new Map()

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 找到第一个出现次数为 1 的字符
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
// #endregion

// #region 3
/* 
- map 一次遍历
- 时间复杂度：O(n + k) = O(n)，遍历字符串一次O(n) + 遍历Map一次O(k)，其中k是不同字符的个数
- 空间复杂度：O(k)，其中k是字符串中不同字符的个数，需要存储所有不同字符及其索引
- 使用 Map 存储索引
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map()

  // 存储每个字符的索引，重复字符标记为-1
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map.has(char)) {
      map.set(char, -1) // 标记为重复
    } else {
      map.set(char, i) // 存储索引
    }
  }

  // 找到最小的非-1索引
  let minIndex = s.length
  for (const [char, index] of map) {
    if (index !== -1 && index < minIndex) {
      minIndex = index
    }
  }

  return minIndex === s.length ? -1 : minIndex
}
// #endregion
