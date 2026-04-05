/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = [[]] // 初始：空集
  for (let i = 0; i < nums.length; i++) {
    const temps = []
    for (let k = 0; k < ans.length; k++) temps.push(ans[k].slice()) // 复制
    for (let j = 0; j < temps.length; j++) temps[j].push(nums[i]) // 插入
    ans = [...ans, ...temps] // 合并
  }
  return ans
}
