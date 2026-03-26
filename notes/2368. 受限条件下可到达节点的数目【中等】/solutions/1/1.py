class Solution:
    def reachableNodes(self, n: int, edges: list[list[int]], restricted: list[int]) -> int:
        blocked = set(restricted)
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        count = 0
        visited = [False] * n
        stack = [0]
        visited[0] = True
        while stack:
            node = stack.pop()
            count += 1
            for nxt in graph[node]:
                if not visited[nxt] and nxt not in blocked:
                    visited[nxt] = True
                    stack.append(nxt)
        return count
