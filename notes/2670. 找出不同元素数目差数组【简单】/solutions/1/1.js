/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const n = nums.length
  const diff = new Array(n)

  // 预先计算每个位置的后缀不同元素数目
  const suffixCount = new Array(n).fill(0)
  const suffixSet = new Set()
  for (let i = n - 1; i >= 0; i--) {
    suffixCount[i] = suffixSet.size
    suffixSet.add(nums[i])
  }

  // 计算前缀不同元素数目并计算差值
  const prefixSet = new Set()
  for (let i = 0; i < n; i++) {
    prefixSet.add(nums[i])
    // 后缀从 i+1 开始，所以使用 suffixCount[i] 表示 i+1 到 n-1 的不同元素数
    diff[i] = prefixSet.size - suffixCount[i]
  }

  return diff
}
