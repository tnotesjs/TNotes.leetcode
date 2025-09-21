/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // 将字符串与自身拼接，去掉首字符和尾字符
  // 如果原字符串在其中出现，则说明可以由重复子串构成
  return (s + s).substring(1, 2 * s.length - 1).includes(s)
}
