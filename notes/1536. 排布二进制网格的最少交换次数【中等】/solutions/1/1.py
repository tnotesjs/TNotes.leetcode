class Solution:
    def minSwaps(self, grid: list[list[int]]) -> int:
        n = len(grid)
        trailing = [0] * n
        for i in range(n):
            cnt = 0
            for j in range(n - 1, -1, -1):
                if grid[i][j] == 0:
                    cnt += 1
                else:
                    break
            trailing[i] = cnt
        swaps = 0
        for i in range(n):
            need = n - 1 - i
            if trailing[i] >= need:
                continue
            j = i + 1
            while j < n and trailing[j] < need:
                j += 1
            if j == n:
                return -1
            while j > i:
                trailing[j], trailing[j - 1] = trailing[j - 1], trailing[j]
                j -= 1
                swaps += 1
        return swaps
