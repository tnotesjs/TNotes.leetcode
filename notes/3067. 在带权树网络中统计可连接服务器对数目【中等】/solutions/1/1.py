class Solution:
    def countPairsOfConnectableServers(self, edges: list[list[int]], signalSpeed: int) -> list[int]:
        n = len(edges) + 1
        g = [[] for _ in range(n)]
        for u, v, w in edges:
            g[u].append((v, w))
            g[v].append((u, w))

        def dfs(node, parent, dist):
            cnt = 1 if dist % signalSpeed == 0 else 0
            for nei, nw in g[node]:
                if nei != parent:
                    cnt += dfs(nei, node, dist + nw)
            return cnt

        res = [0] * n
        for c in range(n):
            prev = 0
            for next_node, w in g[c]:
                cnt = dfs(next_node, c, w)
                res[c] += prev * cnt
                prev += cnt
        return res
