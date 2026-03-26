class Solution:
    def modifiedGraphEdges(self, n: int, edges: list[list[int]], source: int, destination: int, target: int) -> list[list[int]]:
        import heapq
        INF = float('inf')

        adj = [[] for _ in range(n)]
        for i, (u, v, w) in enumerate(edges):
            adj[u].append((v, i))
            adj[v].append((u, i))

        # Phase 1: Dijkstra from destination, positive edges only
        d_dest = [INF] * n
        d_dest[destination] = 0
        pq = [(0, destination)]
        while pq:
            d, u = heapq.heappop(pq)
            if d > d_dest[u]:
                continue
            for v, idx in adj[u]:
                if edges[idx][2] == -1:
                    continue
                nd = d + edges[idx][2]
                if nd < d_dest[v]:
                    d_dest[v] = nd
                    heapq.heappush(pq, (nd, v))
        if d_dest[source] < target:
            return []

        # Phase 2: Dijkstra from source, set modifiable edges
        dist = [INF] * n
        dist[source] = 0
        pq = [(0, source)]
        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]:
                continue
            for v, idx in adj[u]:
                w = edges[idx][2]
                if w == -1:
                    w = max(1, target - d - d_dest[v])
                    edges[idx][2] = w
                nd = d + w
                if nd < dist[v]:
                    dist[v] = nd
                    heapq.heappush(pq, (nd, v))
        if dist[destination] != target:
            return []

        for e in edges:
            if e[2] == -1:
                e[2] = 2 * 10**9
        return edges
