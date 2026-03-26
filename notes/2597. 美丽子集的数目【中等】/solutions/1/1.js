/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b)
  let ans = 0
  const cnt = new Map()

  const dfs = (i) => {
    if (i === nums.length) {
      ans++
      return
    }
    // 不选 nums[i]
    dfs(i + 1)
    // 选 nums[i]
    if (!cnt.get(nums[i] - k)) {
      cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
      dfs(i + 1)
      cnt.set(nums[i], cnt.get(nums[i]) - 1)
    }
  }

  dfs(0)
  return ans - 1 // 减去空集
}
