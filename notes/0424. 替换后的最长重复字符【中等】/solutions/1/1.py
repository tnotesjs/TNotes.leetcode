class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = [0] * 26
        left = max_freq = res = 0
        for right in range(len(s)):
            count[ord(s[right]) - 65] += 1
            max_freq = max(max_freq, count[ord(s[right]) - 65])
            if right - left + 1 - max_freq > k:
                count[ord(s[left]) - 65] -= 1
                left += 1
            res = max(res, right - left + 1)
        return res
