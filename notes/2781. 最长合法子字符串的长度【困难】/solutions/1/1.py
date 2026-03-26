class Solution:
    def longestValidSubstring(self, word: str, forbidden: list[str]) -> int:
        s = set(forbidden)
        n = len(word)
        res = 0
        right = n
        for left in range(n - 1, -1, -1):
            for k in range(left, min(left + 10, right)):
                if word[left:k + 1] in s:
                    right = k
                    break
            res = max(res, right - left)
        return res
