class Solution:
    def gardenNoAdj(self, n: int, paths: list[list[int]]) -> list[int]:
        graph = [[] for _ in range(n + 1)]
        for u, v in paths:
            graph[u].append(v)
            graph[v].append(u)
        res = [0] * n
        for i in range(1, n + 1):
            used = {res[j - 1] for j in graph[i] if res[j - 1] > 0}
            for c in range(1, 5):
                if c not in used:
                    res[i - 1] = c
                    break
        return res
