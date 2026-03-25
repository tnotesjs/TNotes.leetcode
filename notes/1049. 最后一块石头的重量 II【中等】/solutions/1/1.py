class Solution:
    def lastStoneWeightII(self, stones: list[int]) -> int:
        total = sum(stones)
        target = total // 2
        dp = [False] * (target + 1)
        dp[0] = True
        for s in stones:
            for j in range(target, s - 1, -1):
                dp[j] = dp[j] or dp[j - s]
        for j in range(target, -1, -1):
            if dp[j]:
                return total - 2 * j
        return total
