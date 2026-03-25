/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  const MOD = 1000000007n
  const n = nums.length
  // 前缀和
  const prefix = new Array(n + 1).fill(0n)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + BigInt(nums[i])
  // 单调栈找每个元素作为最小值的范围
  const left = new Array(n),
    right = new Array(n)
  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop()
    left[i] = stack.length ? stack[stack.length - 1] + 1 : 0
    stack.push(i)
  }
  stack.length = 0
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop()
    right[i] = stack.length ? stack[stack.length - 1] - 1 : n - 1
    stack.push(i)
  }
  let ans = 0n
  for (let i = 0; i < n; i++) {
    const sum = prefix[right[i] + 1] - prefix[left[i]]
    const product = BigInt(nums[i]) * sum
    if (product > ans) ans = product
  }
  return Number(ans % MOD)
}
