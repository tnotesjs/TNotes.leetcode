class Solution:
    def countVisitedNodes(self, edges: list[int]) -> list[int]:
        from collections import deque
        n = len(edges)
        ans = [0] * n
        in_deg = [0] * n
        for e in edges:
            in_deg[e] += 1
        q = deque(i for i in range(n) if in_deg[i] == 0)
        visited = [False] * n
        while q:
            u = q.popleft()
            visited[u] = True
            v = edges[u]
            in_deg[v] -= 1
            if in_deg[v] == 0:
                q.append(v)
        for i in range(n):
            if visited[i]:
                continue
            length = 0
            u = i
            while True:
                visited[u] = True
                u = edges[u]
                length += 1
                if u == i:
                    break
            u = i
            while True:
                ans[u] = length
                u = edges[u]
                if u == i:
                    break
        for i in range(n):
            if ans[i] > 0:
                continue
            path = []
            u = i
            while ans[u] == 0:
                path.append(u)
                u = edges[u]
            for j in range(len(path) - 1, -1, -1):
                ans[path[j]] = ans[u] + len(path) - j
        return ans
