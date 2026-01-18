/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const ans = []

  for (const num of nums) {
    // 将数字转为字符串后分割每一位
    const digits = String(num).split('').map(Number)
    ans.push(...digits)
  }

  return ans
}
