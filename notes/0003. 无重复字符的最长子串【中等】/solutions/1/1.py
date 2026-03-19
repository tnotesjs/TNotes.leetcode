class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        for i in range(len(s)):  # start
            seen = set()
            for j in range(i, len(s)):  # end
                if s[j] in seen:
                    break  # start 右移
                seen.add(s[j])
                ans = max(ans, len(seen))
        return ans
