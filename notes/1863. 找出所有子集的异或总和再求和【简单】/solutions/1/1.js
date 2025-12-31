/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const n = nums.length

  const dfs = (idx, curXor) => {
    if (idx === n) return curXor
    // 选择或不选择当前元素
    return dfs(idx + 1, curXor) + dfs(idx + 1, curXor ^ nums[idx])
  }

  return dfs(0, 0)
}
