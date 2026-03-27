/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  const n = nums.length
  let ans = 0
  const targets = [
    nums[0] + nums[1],
    nums[0] + nums[n - 1],
    nums[n - 2] + nums[n - 1]
  ]
  for (const target of targets) {
    const memo = new Map()
    const dfs = (l, r) => {
      if (l >= r) return 0
      const key = l * n + r
      if (memo.has(key)) return memo.get(key)
      let res = 0
      if (nums[l] + nums[l + 1] === target) {
        res = Math.max(res, 1 + dfs(l + 2, r))
      }
      if (nums[l] + nums[r] === target) {
        res = Math.max(res, 1 + dfs(l + 1, r - 1))
      }
      if (nums[r - 1] + nums[r] === target) {
        res = Math.max(res, 1 + dfs(l, r - 2))
      }
      memo.set(key, res)
      return res
    }
    ans = Math.max(ans, dfs(0, n - 1))
  }
  return ans
}
