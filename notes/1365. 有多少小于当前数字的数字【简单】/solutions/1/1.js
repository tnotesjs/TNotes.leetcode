/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // 数字范围是 0-100，创建大小为 101 的数组统计频次
  const U = 101
  const freq = new Array(U).fill(0)

  // 统计每个数字出现的次数
  for (const num of nums) {
    freq[num]++
  }

  // 构建前缀和，freq[i] 表示小于等于 i 的数字个数
  for (let i = 1; i < U; i++) {
    freq[i] += freq[i - 1]
  }

  const res = new Array(nums.length)
  // 对每个数字，计算有多少小于它的数字
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    // 如果数字为 0，没有比它更小的数；否则取 freq[v-1]（小于 v 的数的个数）
    res[i] = v === 0 ? 0 : freq[v - 1]
  }

  return res
}
