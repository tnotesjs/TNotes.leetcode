class Solution:
    def resultGrid(self, image: list[list[int]], threshold: int) -> list[list[int]]:
        m, n = len(image), len(image[0])
        sum_grid = [[0] * n for _ in range(m)]
        cnt_grid = [[0] * n for _ in range(m)]
        for i in range(m - 2):
            for j in range(n - 2):
                valid = True
                total = 0
                for r in range(i, i + 3):
                    for c in range(j, j + 3):
                        total += image[r][c]
                        if r > i and abs(image[r][c] - image[r-1][c]) > threshold:
                            valid = False
                        if c > j and abs(image[r][c] - image[r][c-1]) > threshold:
                            valid = False
                if valid:
                    avg = total // 9
                    for r in range(i, i + 3):
                        for c in range(j, j + 3):
                            sum_grid[r][c] += avg
                            cnt_grid[r][c] += 1
        return [[sum_grid[i][j] // cnt_grid[i][j] if cnt_grid[i][j] > 0 else image[i][j] for j in range(n)] for i in range(m)]
