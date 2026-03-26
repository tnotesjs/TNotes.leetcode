class Solution:
    def countUnguarded(self, m: int, n: int, guards: list[list[int]], walls: list[list[int]]) -> int:
        grid = [[0] * n for _ in range(m)]
        for r, c in guards:
            grid[r][c] = 1
        for r, c in walls:
            grid[r][c] = 2
        for gr, gc in guards:
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
                r, c = gr + dr, gc + dc
                while 0 <= r < m and 0 <= c < n and grid[r][c] != 1 and grid[r][c] != 2:
                    grid[r][c] = 3
                    r += dr
                    c += dc
        return sum(1 for i in range(m) for j in range(n) if grid[i][j] == 0)
