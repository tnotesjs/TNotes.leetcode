class Solution:
    def longestStrChain(self, words: list[str]) -> int:
        words.sort(key=len)
        dp = {}
        res = 1
        for word in words:
            best = 1
            for i in range(len(word)):
                prev = word[:i] + word[i + 1:]
                if prev in dp:
                    best = max(best, dp[prev] + 1)
            dp[word] = best
            res = max(res, best)
        return res
