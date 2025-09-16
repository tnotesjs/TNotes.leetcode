/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = []

  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz'
    if (i % 5 === 0) str += 'Buzz'
    result.push(str || i.toString()) // 如果 str 为空，说明都不整除
  }

  return result
}
// @lc code=end
