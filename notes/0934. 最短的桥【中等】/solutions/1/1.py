from collections import deque

class Solution:
    def shortestBridge(self, grid: list[list[int]]) -> int:
        n = len(grid)
        dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        queue = deque()

        # 迭代 DFS 标记第一个岛为 2
        found = False
        for i in range(n):
            if found:
                break
            for j in range(n):
                if grid[i][j] == 1:
                    stack = [(i, j)]
                    grid[i][j] = 2
                    while stack:
                        x, y = stack.pop()
                        queue.append((x, y))
                        for di, dj in dirs:
                            ni, nj = x + di, y + dj
                            if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 1:
                                grid[ni][nj] = 2
                                stack.append((ni, nj))
                    found = True
                    break

        # BFS 找第二个岛
        step = 0
        while queue:
            for _ in range(len(queue)):
                x, y = queue.popleft()
                for di, dj in dirs:
                    nx, ny = x + di, y + dj
                    if 0 <= nx < n and 0 <= ny < n:
                        if grid[nx][ny] == 1:
                            return step
                        if grid[nx][ny] == 0:
                            grid[nx][ny] = 2
                            queue.append((nx, ny))
            step += 1

        return -1
