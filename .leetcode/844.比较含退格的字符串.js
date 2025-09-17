/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1 // s的指针
  let j = t.length - 1 // t的指针
  let skipS = 0 // s中需要跳过的字符数
  let skipT = 0 // t中需要跳过的字符数

  while (i >= 0 || j >= 0) {
    // 在s中找到下一个有效字符
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++
        i--
      } else if (skipS > 0) {
        skipS--
        i--
      } else {
        break
      }
    }

    // 在t中找到下一个有效字符
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++
        j--
      } else if (skipT > 0) {
        skipT--
        j--
      } else {
        break
      }
    }

    // 比较两个有效字符
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false
    }

    // 如果一个字符串已经遍历完，另一个还有有效字符，则不相等
    if (i >= 0 !== j >= 0) {
      return false
    }

    i--
    j--
  }

  return true
}
// @lc code=end

backspaceCompare('ab#c', 'ad#c')
