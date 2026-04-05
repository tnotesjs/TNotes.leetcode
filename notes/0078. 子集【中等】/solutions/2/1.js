/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const t = []
  const ans = []
  const dfs = (deep) => {
    if (deep === nums.length) {
      // console.log(t);
      ans.push([...t])
      return
    }
    t.push(nums[deep])
    dfs(deep + 1)
    t.pop()
    dfs(deep + 1)
  }
  dfs(0)
  return ans
}
