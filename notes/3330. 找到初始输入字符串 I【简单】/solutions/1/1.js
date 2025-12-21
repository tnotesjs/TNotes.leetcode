/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let count = 1 // 原字符串本身

  // 统计连续相同字符的位置数量
  // 每个这样的位置都可能是多打的
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++
    }
  }

  return count
}
