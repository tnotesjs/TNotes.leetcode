from collections import defaultdict

class Solution:
    def restoreArray(self, adjacentPairs: list[list[int]]) -> list[int]:
        adj = defaultdict(list)
        for u, v in adjacentPairs:
            adj[u].append(v)
            adj[v].append(u)
        start = next(k for k, v in adj.items() if len(v) == 1)
        n = len(adjacentPairs) + 1
        res = [start]
        visited = {start}
        for _ in range(n - 1):
            for nxt in adj[res[-1]]:
                if nxt not in visited:
                    res.append(nxt)
                    visited.add(nxt)
                    break
        return res
