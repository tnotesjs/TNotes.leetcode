var lengthOfLongestSubstring = function (s) {
  const len = s.length
  const set = new Set()

  let ans = 0
  let left = 0
  let right = 0

  while (right < len) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
      ans = Math.max(ans, set.size)
    } else {
      set.delete(s[left])
      left++
    }
  }
  return ans
}
