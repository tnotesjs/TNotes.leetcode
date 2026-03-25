class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        from collections import deque
        n = len(graph)
        rg = [[] for _ in range(n)]
        out_deg = [0] * n
        for i, neis in enumerate(graph):
            out_deg[i] = len(neis)
            for j in neis:
                rg[j].append(i)
        queue = deque(i for i in range(n) if out_deg[i] == 0)
        safe = [False] * n
        while queue:
            u = queue.popleft()
            safe[u] = True
            for v in rg[u]:
                out_deg[v] -= 1
                if out_deg[v] == 0:
                    queue.append(v)
        return [i for i in range(n) if safe[i]]
