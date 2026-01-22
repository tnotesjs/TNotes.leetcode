/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const n = nums.length

  const dfs = (idx, curXor) => {
    if (idx === n) return curXor

    // 递归所有子集
    // 不选择当前元素 dfs(idx + 1, curXor)
    // 选择当前元素 dfs(idx + 1, curXor ^ nums[idx])
    return dfs(idx + 1, curXor) + dfs(idx + 1, curXor ^ nums[idx])
  }

  return dfs(0, 0)
}
