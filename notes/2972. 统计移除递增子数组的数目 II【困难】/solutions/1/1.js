var incremovableSubarrayCount = function (nums) {
  const n = nums.length
  let i = 0
  while (i + 1 < n && nums[i] < nums[i + 1]) i++
  if (i === n - 1) return (n * (n + 1)) / 2
  let j = n - 1
  while (j > 0 && nums[j - 1] < nums[j]) j--
  let ans = n - j + 1
  let r = j
  for (let l = 0; l <= i; l++) {
    while (r < n && nums[r] <= nums[l]) r++
    ans += n - r + 1
  }
  return ans
}
