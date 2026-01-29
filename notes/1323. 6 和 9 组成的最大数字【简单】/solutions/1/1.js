/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // 将数字转换为字符串，找到第一个'6'并替换为'9'
  const str = num.toString()
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      // 替换第一个'6'为'9'，这会产生最大增量
      return parseInt(str.substring(0, i) + '9' + str.substring(i + 1))
    }
  }
  // 如果没有'6'，直接返回原数字
  return num
}

// 上述逻辑也可简写为一行：
// var maximum69Number = function (num) {
//   return parseInt(num.toString().replace('6', '9'))
// }
