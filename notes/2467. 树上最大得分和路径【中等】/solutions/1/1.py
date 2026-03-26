class Solution:
    def mostProfitablePath(self, edges: list[list[int]], bob: int, amount: list[int]) -> int:
        from collections import deque
        n = len(amount)
        g = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)

        parent = [-1] * n
        visited = [False] * n
        visited[0] = True
        q = deque([0])
        while q:
            u = q.popleft()
            for v in g[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    q.append(v)

        bob_time = [float('inf')] * n
        cur, t = bob, 0
        while cur != -1:
            bob_time[cur] = t
            t += 1
            cur = parent[cur]

        ans = float('-inf')

        def dfs(u, par, time, score):
            nonlocal ans
            if time < bob_time[u]:
                score += amount[u]
            elif time == bob_time[u]:
                score += amount[u] // 2
            is_leaf = True
            for v in g[u]:
                if v != par:
                    is_leaf = False
                    dfs(v, u, time + 1, score)
            if is_leaf:
                ans = max(ans, score)

        dfs(0, -1, 0, 0)
        return ans
