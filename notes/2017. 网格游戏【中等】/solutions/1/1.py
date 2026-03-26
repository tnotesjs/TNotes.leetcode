class Solution:
    def gridGame(self, grid: list[list[int]]) -> int:
        n = len(grid[0])
        top_sum = sum(grid[0])
        bottom_sum = 0
        ans = float('inf')
        for j in range(n):
            top_sum -= grid[0][j]
            ans = min(ans, max(top_sum, bottom_sum))
            bottom_sum += grid[1][j]
        return ans
