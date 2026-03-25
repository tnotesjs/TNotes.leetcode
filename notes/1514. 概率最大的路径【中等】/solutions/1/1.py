from collections import deque

class Solution:
    def maxProbability(self, n: int, edges: list[list[int]], succProb: list[float],
                       start_node: int, end_node: int) -> float:
        adj: list[list[tuple[int, float]]] = [[] for _ in range(n)]
        for i, (u, v) in enumerate(edges):
            adj[u].append((v, succProb[i]))
            adj[v].append((u, succProb[i]))
        prob = [0.0] * n
        prob[start_node] = 1.0
        queue = deque([start_node])
        while queue:
            node = queue.popleft()
            for nxt, p in adj[node]:
                if prob[node] * p > prob[nxt]:
                    prob[nxt] = prob[node] * p
                    queue.append(nxt)
        return prob[end_node]
