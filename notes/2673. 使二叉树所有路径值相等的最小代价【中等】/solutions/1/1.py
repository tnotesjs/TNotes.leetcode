class Solution:
    def minIncrements(self, n: int, cost: list[int]) -> int:
        ans = 0
        for j in range(n // 2 - 1, -1, -1):
            l, r = 2 * j + 1, 2 * j + 2
            ans += abs(cost[l] - cost[r])
            cost[j] += max(cost[l], cost[r])
        return ans
