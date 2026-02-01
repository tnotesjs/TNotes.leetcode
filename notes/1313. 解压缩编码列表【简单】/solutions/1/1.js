/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = []

  // 每次处理一对 [freq, val]，添加 freq 个 val 到结果数组
  // 其中 nums[i] 是 freq，nums[i + 1] 是 val
  for (let i = 0; i < nums.length; i += 2)
    for (let j = 0; j < nums[i]; j++) result.push(nums[i + 1])

  return result
}
