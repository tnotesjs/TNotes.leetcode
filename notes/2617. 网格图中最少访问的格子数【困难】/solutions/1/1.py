class Solution:
    def minimumVisitedCells(self, grid: list[list[int]]) -> int:
        import heapq
        m, n = len(grid), len(grid[0])
        dist = [[-1] * n for _ in range(m)]
        dist[0][0] = 1
        row_heaps = [[] for _ in range(m)]
        col_heaps = [[] for _ in range(n)]
        for i in range(m):
            for j in range(n):
                while row_heaps[i] and row_heaps[i][0][1] < j:
                    heapq.heappop(row_heaps[i])
                if row_heaps[i] and (dist[i][j] == -1 or row_heaps[i][0][0] + 1 < dist[i][j]):
                    dist[i][j] = row_heaps[i][0][0] + 1
                while col_heaps[j] and col_heaps[j][0][1] < i:
                    heapq.heappop(col_heaps[j])
                if col_heaps[j] and (dist[i][j] == -1 or col_heaps[j][0][0] + 1 < dist[i][j]):
                    dist[i][j] = col_heaps[j][0][0] + 1
                if dist[i][j] != -1:
                    heapq.heappush(row_heaps[i], (dist[i][j], j + grid[i][j]))
                    heapq.heappush(col_heaps[j], (dist[i][j], i + grid[i][j]))
        return dist[m - 1][n - 1]
