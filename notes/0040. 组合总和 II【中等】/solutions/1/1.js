/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const ans = []

  const backtrack = (start, remain, path) => {
    if (remain === 0) {
      ans.push([...path])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) break // 剪枝
      if (i > start && candidates[i] === candidates[i - 1]) continue // 跳过同层重复元素
      path.push(candidates[i])
      backtrack(i + 1, remain - candidates[i], path) // i+1：每个元素只用一次
      path.pop()
    }
  }

  backtrack(0, target, [])
  return ans
}
