class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        vowels = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
        first = {0: -1}
        mask = 0
        ans = 0
        for i, ch in enumerate(s):
            if ch in vowels:
                mask ^= 1 << vowels[ch]
            if mask in first:
                ans = max(ans, i - first[mask])
            else:
                first[mask] = i
        return ans
