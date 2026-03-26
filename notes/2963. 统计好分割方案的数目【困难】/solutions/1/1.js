var numberOfGoodPartitions = function (nums) {
  const MOD = 1e9 + 7
  const last = new Map()
  for (let i = 0; i < nums.length; i++) last.set(nums[i], i)
  let segments = 0,
    maxRight = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > maxRight) segments++
    maxRight = Math.max(maxRight, last.get(nums[i]))
  }
  let ans = 1
  for (let i = 0; i < segments - 1; i++) ans = (ans * 2) % MOD
  return ans
}
