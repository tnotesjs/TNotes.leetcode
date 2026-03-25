class Solution:
    def minCost(self, colors: str, neededTime: list[int]) -> int:
        res = 0
        t = list(neededTime)
        for i in range(1, len(colors)):
            if colors[i] == colors[i - 1]:
                res += min(t[i], t[i - 1])
                t[i] = max(t[i], t[i - 1])
        return res
