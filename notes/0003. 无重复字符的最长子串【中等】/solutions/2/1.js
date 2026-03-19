var lengthOfLongestSubstring = function (s) {
  const len = s.length
  const set = new Set()

  let ans = 0
  let left = 0
  let right = 0

  while (right < len) {
    if (!set.has(s[right])) {
      // 窗口扩大
      set.add(s[right])
      right++
      ans = Math.max(ans, set.size)
    } else {
      // 窗口缩小
      set.delete(s[left])
      left++
    }
  }
  return ans
}

// 其他写法：
/* var lengthOfLongestSubstring = function (s) {
  const len = s.length
  const set = new Set()

  let ans = 0
  let end = -1

  for (let i = 0; i < len; i++) {
    // 收缩窗口 - 缩 1 格
    if (i !== 0) set.delete(s[i - 1])
    // 扩展窗口 - 尽可能多扩展
    while (end + 1 < len && !set.has(s[end + 1])) {
      set.add(s[end + 1])
      end++
    }
    ans = Math.max(ans, set.size)
  }
  return ans
} */
