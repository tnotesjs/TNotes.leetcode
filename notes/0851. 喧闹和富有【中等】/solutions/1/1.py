class Solution:
    def loudAndRich(self, richer: List[List[int]], quiet: List[int]) -> List[int]:
        n = len(quiet)
        graph = [[] for _ in range(n)]
        for a, b in richer:
            graph[b].append(a)
        res = [-1] * n
        def dfs(u: int) -> int:
            if res[u] != -1: return res[u]
            res[u] = u
            for v in graph[u]:
                cand = dfs(v)
                if quiet[cand] < quiet[res[u]]:
                    res[u] = cand
            return res[u]
        for i in range(n): dfs(i)
        return res
