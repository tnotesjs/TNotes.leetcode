/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  const path = []
  const used = new Array(nums.length).fill(false)

  const backtrack = () => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      path.push(nums[i])
      used[i] = true

      backtrack()

      path.pop()
      used[i] = false
    }
  }

  backtrack()
  return ans
}
