class Solution:
    def minimumTime(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1
        import heapq
        dist = [[float("inf")] * n for _ in range(m)]
        dist[0][0] = 0
        heap = [(0, 0, 0)]
        while heap:
            t, r, c = heapq.heappop(heap)
            if r == m - 1 and c == n - 1:
                return t
            if t > dist[r][c]:
                continue
            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    w = max(t + 1, grid[nr][nc])
                    if (w - t) % 2 == 0:
                        w += 1
                    if w < dist[nr][nc]:
                        dist[nr][nc] = w
                        heapq.heappush(heap, (w, nr, nc))
        return -1
