/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  const seen = new Set()
  let xorResult = 0

  for (const num of nums) {
    if (seen.has(num)) {
      // 出现第二次，异或到结果中
      xorResult ^= num
    } else {
      seen.add(num)
    }
  }

  return xorResult
}
