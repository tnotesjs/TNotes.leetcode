class Solution:
    def getWordsInLongestSubsequence(self, n: int, words: list[str], groups: list[int]) -> list[str]:
        dp = [1] * n
        prev = [-1] * n

        def hamming(a: str, b: str) -> int:
            if len(a) != len(b):
                return -1
            d = 0
            for x, y in zip(a, b):
                if x != y:
                    d += 1
                    if d > 1:
                        return d
            return d

        for i in range(1, n):
            for j in range(i):
                if groups[i] != groups[j] and hamming(words[i], words[j]) == 1:
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j] + 1
                        prev[i] = j

        max_idx = max(range(n), key=lambda i: dp[i])
        res = []
        i = max_idx
        while i != -1:
            res.append(words[i])
            i = prev[i]
        return res[::-1]
