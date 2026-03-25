class Solution:
    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:
        from collections import deque
        n = len(grid)
        if grid[0][0] or grid[n - 1][n - 1]:
            return -1
        dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
        queue = deque([(0, 0)])
        grid[0][0] = 1
        dist = 1
        while queue:
            for _ in range(len(queue)):
                r, c = queue.popleft()
                if r == n - 1 and c == n - 1:
                    return dist
                for dr, dc in dirs:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                        grid[nr][nc] = 1
                        queue.append((nr, nc))
            dist += 1
        return -1
