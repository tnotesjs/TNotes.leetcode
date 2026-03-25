class Solution:
    def beautySum(self, s: str) -> int:
        ans = 0
        for i in range(len(s)):
            cnt = [0] * 26
            for j in range(i, len(s)):
                cnt[ord(s[j]) - 97] += 1
                active = [c for c in cnt if c > 0]
                ans += max(active) - min(active)
        return ans
