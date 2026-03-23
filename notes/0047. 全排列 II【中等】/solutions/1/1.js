/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const ans = []
  const used = new Array(nums.length).fill(false)

  const backtrack = (path) => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      // 同层跳过重复：前一个相同元素未使用，说明在同一层已经枚举过
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
      used[i] = true
      path.push(nums[i])
      backtrack(path)
      path.pop()
      used[i] = false
    }
  }

  backtrack([])
  return ans
}
