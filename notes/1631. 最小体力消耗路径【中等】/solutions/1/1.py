class Solution:
    def minimumEffortPath(self, heights: list[list[int]]) -> int:
        import heapq
        m, n = len(heights), len(heights[0])
        dist = [[float('inf')] * n for _ in range(m)]
        dist[0][0] = 0
        pq = [(0, 0, 0)]
        while pq:
            eff, r, c = heapq.heappop(pq)
            if eff > dist[r][c]:
                continue
            if r == m - 1 and c == n - 1:
                return eff
            for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    new_eff = max(eff, abs(heights[nr][nc] - heights[r][c]))
                    if new_eff < dist[nr][nc]:
                        dist[nr][nc] = new_eff
                        heapq.heappush(pq, (new_eff, nr, nc))
        return 0
