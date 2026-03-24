class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        from collections import deque
        n = len(graph)
        color = [0] * n
        for i in range(n):
            if color[i] != 0:
                continue
            queue = deque([i])
            color[i] = 1
            while queue:
                u = queue.popleft()
                for v in graph[u]:
                    if color[v] == 0:
                        color[v] = -color[u]
                        queue.append(v)
                    elif color[v] == color[u]:
                        return False
        return True
