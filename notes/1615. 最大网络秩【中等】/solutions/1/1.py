class Solution:
    def maximalNetworkRank(self, n: int, roads: list[list[int]]) -> int:
        degree = [0] * n
        connected = set()
        for a, b in roads:
            degree[a] += 1
            degree[b] += 1
            connected.add((a, b))
            connected.add((b, a))
        res = 0
        for i in range(n):
            for j in range(i + 1, n):
                rank = degree[i] + degree[j] - (1 if (i, j) in connected else 0)
                res = max(res, rank)
        return res
