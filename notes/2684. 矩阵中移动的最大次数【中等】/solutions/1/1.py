class Solution:
    def maxMoves(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        reachable = set(range(m))
        for j in range(n - 1):
            nxt = set()
            for i in reachable:
                for di in (-1, 0, 1):
                    ni = i + di
                    if 0 <= ni < m and grid[ni][j + 1] > grid[i][j]:
                        nxt.add(ni)
            if not nxt:
                return j
            reachable = nxt
        return n - 1
