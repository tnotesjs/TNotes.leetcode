class Solution:
    def colorBorder(self, grid: list[list[int]], row: int, col: int, color: int) -> list[list[int]]:
        m, n = len(grid), len(grid[0])
        original = grid[row][col]
        visited = [[False] * n for _ in range(m)]
        borders = []

        def dfs(i: int, j: int) -> None:
            visited[i][j] = True
            is_border = False
            for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                ni, nj = i + di, j + dj
                if ni < 0 or ni >= m or nj < 0 or nj >= n or grid[ni][nj] != original:
                    is_border = True
                elif not visited[ni][nj]:
                    dfs(ni, nj)
            if is_border:
                borders.append((i, j))

        dfs(row, col)
        for i, j in borders:
            grid[i][j] = color
        return grid
