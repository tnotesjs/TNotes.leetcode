/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length

  // 处理加一
  // 下面两种写法都 OK

  // 写法 1：
  // for (let i = len - 1; i >= 0; i--) {
  //   digits[i]++
  //   digits[i] %= 10
  //   // 如果某位加一后不为 0（没有进位）则直接返回
  //   if (digits[i] !== 0) return digits
  // }

  // 写法 2：
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      // 当前位不是 9，加 1 后直接返回
      digits[i]++
      return digits
    }
  }

  // 如果所有位都需要进位（全为 9），则创建新数组并将首位设为 1
  // 下面两种写法都 OK

  // 写法 1：
  // const result = Array(len + 1).fill(0)
  // result[0] = 1
  // return result

  // 写法 2：
  digits.unshift(1)
  return digits
}
