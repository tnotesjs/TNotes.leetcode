/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let prefix = 0
  let minPrefix = Infinity
  for (const x of nums) {
    prefix += x
    if (prefix < minPrefix) minPrefix = prefix
  }
  // 保证最小前缀和 + startValue >= 1
  return minPrefix < 1 ? 1 - minPrefix : 1
}
