/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length
  let ans = 0

  // 用于存储数字 d 及其出现次数的哈希表
  const freq = new Map()

  // 从后往前遍历 c 的位置
  // c 至少为 2，因为 a,b 需要在其前面插入
  for (let c = n - 2; c >= 2; c -= 1) {
    // 将当前 d 值（即 c 位置后一位）加入频率映射
    const dVal = nums[c + 1]
    freq.set(dVal, (freq.get(dVal) || 0) + 1)

    // 枚举所有可能的 3 元组 (a, b, c)
    for (let a = 0; a < c; a += 1) {
      for (let b = a + 1; b < c; b += 1) {
        // 检查是否存在一个 d 值（nums[c+1] 之后的位置）使得 sum = d
        const sum = nums[a] + nums[b] + nums[c]
        ans += freq.get(sum) || 0
      }
    }
  }

  return ans
}
