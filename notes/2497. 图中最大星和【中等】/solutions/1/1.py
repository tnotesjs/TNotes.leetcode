class Solution:
    def maxStarSum(self, vals: list[int], edges: list[list[int]], k: int) -> int:
        n = len(vals)
        neighbors = [[] for _ in range(n)]
        for u, v in edges:
            neighbors[u].append(vals[v])
            neighbors[v].append(vals[u])
        ans = float('-inf')
        for i in range(n):
            neighbors[i].sort(reverse=True)
            s = vals[i]
            for j in range(min(k, len(neighbors[i]))):
                if neighbors[i][j] <= 0:
                    break
                s += neighbors[i][j]
            ans = max(ans, s)
        return ans
