class Graph:
    def __init__(self, n: int, edges: list[list[int]]):
        self.n = n
        self.adj = [[] for _ in range(n)]
        for u, v, w in edges:
            self.adj[u].append((v, w))

    def addEdge(self, edge: list[int]) -> None:
        self.adj[edge[0]].append((edge[1], edge[2]))

    def shortestPath(self, node1: int, node2: int) -> int:
        import heapq
        dist = [float('inf')] * self.n
        dist[node1] = 0
        pq = [(0, node1)]
        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]:
                continue
            for v, w in self.adj[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
                    heapq.heappush(pq, (dist[v], v))
        return dist[node2] if dist[node2] != float('inf') else -1
