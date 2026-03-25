class Solution:
    def largest1BorderedSquare(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        hor = [[0] * n for _ in range(m)]
        ver = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if grid[i][j]:
                    hor[i][j] = (hor[i][j - 1] if j > 0 else 0) + 1
                    ver[i][j] = (ver[i - 1][j] if i > 0 else 0) + 1
        res = 0
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                side = min(hor[i][j], ver[i][j])
                while side > res:
                    if ver[i][j - side + 1] >= side and hor[i - side + 1][j] >= side:
                        res = side
                        break
                    side -= 1
        return res * res
