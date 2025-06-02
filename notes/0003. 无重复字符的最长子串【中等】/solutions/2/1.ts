function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  const set = new Set<string>()

  let ans = 0
  let end = -1

  for (let i = 0; i < len; i++) {
    if (i !== 0) set.delete(s[i - 1])
    while (end + 1 < len && !set.has(s[end + 1])) {
      set.add(s[end + 1])
      end++
    }
    ans = Math.max(ans, set.size)
  }

  return ans
}
