var countSubarrays = function (nums, k) {
  const mx = Math.max(...nums)
  let ans = 0,
    cnt = 0,
    left = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === mx) cnt++
    while (cnt >= k) {
      if (nums[left] === mx) cnt--
      left++
    }
    ans += left
  }
  return ans
}
