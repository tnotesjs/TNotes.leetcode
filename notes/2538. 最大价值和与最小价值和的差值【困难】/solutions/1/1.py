import sys

class Solution:
    def maxOutput(self, n: int, edges: list[list[int]], price: list[int]) -> int:
        g: list[list[int]] = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        ans = 0
        # 迭代 DFS
        par = [-1] * n
        order = []
        stk = [0]
        visited = [False] * n
        visited[0] = True
        while stk:
            u = stk.pop()
            order.append(u)
            for v in g[u]:
                if not visited[v]:
                    visited[v] = True
                    par[v] = u
                    stk.append(v)
        wl = list(price)  # with leaf
        wt = [0] * n      # without leaf
        for u in reversed(order):
            for v in g[u]:
                if v == par[u]:
                    continue
                ans = max(ans, wl[u] + wt[v], wt[u] + wl[v])
                wl[u] = max(wl[u], price[u] + wl[v])
                wt[u] = max(wt[u], price[u] + wt[v])
        return ans
