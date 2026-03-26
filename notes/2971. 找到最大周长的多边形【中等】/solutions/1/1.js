var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b)
  let sum = 0
  for (const x of nums) sum += x
  for (let i = nums.length - 1; i >= 2; i--) {
    sum -= nums[i]
    if (sum > nums[i]) return sum + nums[i]
  }
  return -1
}
