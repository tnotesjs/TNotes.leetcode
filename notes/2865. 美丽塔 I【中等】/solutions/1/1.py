class Solution:
    def maximumSumOfHeights(self, maxHeights: list[int]) -> int:
        n = len(maxHeights)
        ans = 0
        for i in range(n):
            s = maxHeights[i]
            cur = maxHeights[i]
            for j in range(i - 1, -1, -1):
                cur = min(cur, maxHeights[j])
                s += cur
            cur = maxHeights[i]
            for j in range(i + 1, n):
                cur = min(cur, maxHeights[j])
                s += cur
            ans = max(ans, s)
        return ans
