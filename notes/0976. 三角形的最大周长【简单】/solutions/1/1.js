// 0976. 三角形的最大周长【简单】
// 排序后从最大边开始检查三元组，满足 a + b > c 即返回周长。
function largestPerimeter(nums) {
  nums.sort((a, b) => a - b)
  for (let i = nums.length - 1; i >= 2; i--) {
    const a = nums[i - 2]
    const b = nums[i - 1]
    const c = nums[i]
    if (a + b > c) return a + b + c
  }
  return 0
}
