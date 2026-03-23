/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const ans = []

  const backtrack = (start, remain, path) => {
    if (remain === 0) {
      ans.push([...path])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) break // 剪枝
      path.push(candidates[i])
      backtrack(i, remain - candidates[i], path) // 可重复选取，下一轮仍从 i 开始
      path.pop()
    }
  }

  backtrack(0, target, [])
  return ans
}
