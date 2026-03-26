class Solution:
    def rootCount(self, edges: list[list[int]], guesses: list[list[int]], k: int) -> int:
        from collections import deque
        n = len(edges) + 1
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        guess_set = {(u, v) for u, v in guesses}
        parent = [-1] * n
        order = []
        visited = [False] * n
        visited[0] = True
        q = deque([0])
        cnt = 0
        while q:
            u = q.popleft()
            order.append(u)
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    q.append(v)
                    if (u, v) in guess_set:
                        cnt += 1
        cnts = [0] * n
        cnts[0] = cnt
        ans = 1 if cnt >= k else 0
        for i in range(1, len(order)):
            u = order[i]
            p = parent[u]
            c = cnts[p]
            if (p, u) in guess_set:
                c -= 1
            if (u, p) in guess_set:
                c += 1
            cnts[u] = c
            if c >= k:
                ans += 1
        return ans
