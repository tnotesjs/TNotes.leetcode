class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        def is_magic(r: int, c: int) -> bool:
            vals = [grid[r+i][c+j] for i in range(3) for j in range(3)]
            if sorted(vals) != list(range(1, 10)): return False
            for i in range(3):
                if sum(grid[r+i][c:c+3]) != 15: return False
                if grid[r][c+i] + grid[r+1][c+i] + grid[r+2][c+i] != 15: return False
            if grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2] != 15: return False
            if grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c] != 15: return False
            return True
        m, n = len(grid), len(grid[0])
        return sum(1 for i in range(m-2) for j in range(n-2) if is_magic(i, j))
