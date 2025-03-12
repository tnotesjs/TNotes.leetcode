var sortedSquares = function (nums) {
  const result = []
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const l_num = Math.abs(nums[l])
    const r_num = Math.abs(nums[r])
    if (l_num > r_num) {
      result.unshift(l_num * l_num)
      l++
    } else {
      result.unshift(r_num * r_num)
      r--
    }
  }
  return result
}