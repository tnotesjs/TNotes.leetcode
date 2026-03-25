class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        from collections import deque
        graph = [[] for _ in range(n + 1)]
        for a, b in dislikes:
            graph[a].append(b)
            graph[b].append(a)
        color = [0] * (n + 1)
        for i in range(1, n + 1):
            if color[i] != 0: continue
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
