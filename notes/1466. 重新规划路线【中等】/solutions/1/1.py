class Solution:
    def minReorder(self, n: int, connections: list[list[int]]) -> int:
        from collections import deque
        adj: list[list[tuple[int, int]]] = [[] for _ in range(n)]
        for u, v in connections:
            adj[u].append((v, 1))
            adj[v].append((u, 0))
        visited = [False] * n
        queue = deque([0])
        visited[0] = True
        count = 0
        while queue:
            node = queue.popleft()
            for nxt, cost in adj[node]:
                if not visited[nxt]:
                    visited[nxt] = True
                    count += cost
                    queue.append(nxt)
        return count
