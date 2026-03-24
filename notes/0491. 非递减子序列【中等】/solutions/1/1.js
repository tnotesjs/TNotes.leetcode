/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = []
  const dfs = (start, path) => {
    if (path.length >= 2) res.push([...path])
    const used = new Set()
    for (let i = start; i < nums.length; i++) {
      if (used.has(nums[i])) continue
      if (path.length && nums[i] < path[path.length - 1]) continue
      used.add(nums[i])
      path.push(nums[i])
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}
