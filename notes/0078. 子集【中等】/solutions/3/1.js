/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []

  function backtrack(start, path) {
    res.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]) // 选择
      backtrack(i + 1, path)
      path.pop() // 撤销选择（回溯）
    }
  }

  backtrack(0, [])
  return res
}
