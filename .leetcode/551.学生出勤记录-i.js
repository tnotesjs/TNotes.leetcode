/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0
  let lateCount = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentCount++
      // 重置连续迟到计数
      lateCount = 0
    } else if (s[i] === 'L') {
      lateCount++
    } else {
      // 'P'情况，重置连续迟到计数
      lateCount = 0
    }

    // 提前判断是否不满足条件
    if (absentCount >= 2 || lateCount >= 3) {
      return false
    }
  }

  return true
}
// @lc code=end
