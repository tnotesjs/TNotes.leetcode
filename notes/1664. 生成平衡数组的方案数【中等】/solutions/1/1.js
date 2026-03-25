/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  const n = nums.length
  // 后缀奇偶和
  let suffEven = 0,
    suffOdd = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) suffEven += nums[i]
    else suffOdd += nums[i]
  }
  let prefEven = 0,
    prefOdd = 0,
    res = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) suffEven -= nums[i]
    else suffOdd -= nums[i]
    // 删除 i 后：左侧不变，右侧奇偶交换
    const newEven = prefEven + suffOdd
    const newOdd = prefOdd + suffEven
    if (newEven === newOdd) res++
    if (i % 2 === 0) prefEven += nums[i]
    else prefOdd += nums[i]
  }
  return res
}
