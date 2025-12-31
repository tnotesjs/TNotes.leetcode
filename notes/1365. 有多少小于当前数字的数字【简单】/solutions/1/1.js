/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {}

// 计数 + 前缀和得到每个值的更小元素数量
var smallerNumbersThanCurrent = function (nums) {
  const U = 101
  const freq = new Array(U).fill(0)

  for (const num of nums) {
    freq[num]++
  }

  for (let i = 1; i < U; i++) {
    freq[i] += freq[i - 1]
  }

  const res = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    res[i] = v === 0 ? 0 : freq[v - 1]
  }

  return res
}
