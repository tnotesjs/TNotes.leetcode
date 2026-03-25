class Solution:
    def maxDistance(self, grid: list[list[int]]) -> int:
        from collections import deque
        n = len(grid)
        queue = deque()
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    queue.append((i, j))
        if not queue or len(queue) == n * n:
            return -1
        dirs = [(-1,0),(1,0),(0,-1),(0,1)]
        dist = -1
        while queue:
            for _ in range(len(queue)):
                x, y = queue.popleft()
                for dx, dy in dirs:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 0:
                        grid[nx][ny] = 1
                        queue.append((nx, ny))
            dist += 1
        return dist
