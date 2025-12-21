/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const n = nums.length
  const ans = []

  // 计算子数组的 x-sum
  const calcXSum = (start) => {
    const cnt = new Map()
    // 统计子数组中每个元素的出现次数
    for (let i = start; i < start + k; i++) {
      cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
    }

    // 按出现次数降序，次数相同按数值降序排序
    const sorted = [...cnt.entries()].sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]
      return b[0] - a[0]
    })

    // 取前 x 个元素，计算它们的贡献之和
    let sum = 0
    for (let i = 0; i < Math.min(x, sorted.length); i++) {
      sum += sorted[i][0] * sorted[i][1]
    }
    return sum
  }

  // 枚举每个长度为 k 的子数组
  for (let i = 0; i <= n - k; i++) {
    ans.push(calcXSum(i))
  }

  return ans
}
