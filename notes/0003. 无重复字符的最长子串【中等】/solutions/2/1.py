class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        ans = 0
        left = 0
        right = 0
        while right < len(s):
            if s[right] not in seen:
                # 窗口扩大
                seen.add(s[right])
                right += 1
                ans = max(ans, len(seen))
            else:
                # 窗口缩小
                seen.discard(s[left])
                left += 1
        return ans
