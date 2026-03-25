import sys
sys.setrecursionlimit(200000)

class Solution:
    def countSubTrees(self, n: int, edges: list[list[int]], labels: str) -> list[int]:
        adj: list[list[int]] = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        res = [0] * n

        def dfs(node: int, parent: int) -> list[int]:
            cnt = [0] * 26
            cnt[ord(labels[node]) - 97] = 1
            for child in adj[node]:
                if child == parent:
                    continue
                child_cnt = dfs(child, node)
                for i in range(26):
                    cnt[i] += child_cnt[i]
            res[node] = cnt[ord(labels[node]) - 97]
            return cnt

        dfs(0, -1)
        return res
