import heapq

class Solution:
    def maxPoints(self, grid: list[list[int]], queries: list[int]) -> list[int]:
        m, n = len(grid), len(grid[0])
        ans = [0] * len(queries)
        idx = sorted(range(len(queries)), key=lambda i: queries[i])
        heap = [(grid[0][0], 0, 0)]
        visited = [[False] * n for _ in range(m)]
        visited[0][0] = True
        count = 0
        dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for qi in idx:
            q = queries[qi]
            while heap and heap[0][0] < q:
                _, r, c = heapq.heappop(heap)
                count += 1
                for dr, dc in dirs:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                        visited[nr][nc] = True
                        heapq.heappush(heap, (grid[nr][nc], nr, nc))
            ans[qi] = count
        return ans
