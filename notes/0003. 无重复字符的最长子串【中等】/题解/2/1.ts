function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const set = new Set<string>();
  let ans = 0,
    end = -1;

  for (let i = 0; i < len; i++) {
    // 收缩窗口
    if (i !== 0) set.delete(s.charAt(i - 1));
    while (end + 1 < len && !set.has(s.charAt(end + 1))) {
      // 扩展窗口
      set.add(s.charAt(end + 1));
      end++;
    }
    ans = Math.max(ans, set.size);
  }

  return ans;
}
