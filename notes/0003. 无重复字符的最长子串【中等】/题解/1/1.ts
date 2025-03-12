function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const set = new Set<string>();
  let ans = 0;

  for (let i = 0; i < len; i++) {
    // start
    for (let j = i; j < len; j++) {
      // end
      if (!set.has(s[j])) {
        set.add(s[j]);
        ans = ans > set.size ? ans : set.size;
      } else {
        set.clear();
        break; // start 右移
      }
    }
  }

  return ans;
}
