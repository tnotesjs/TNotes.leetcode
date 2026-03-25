class Solution:
    def rotateGrid(self, grid: list[list[int]], k: int) -> list[list[int]]:
        m, n = len(grid), len(grid[0])
        layers = min(m, n) // 2
        for layer in range(layers):
            r1, c1, r2, c2 = layer, layer, m - 1 - layer, n - 1 - layer
            ring = []
            for c in range(c1, c2): ring.append(grid[r1][c])
            for r in range(r1, r2): ring.append(grid[r][c2])
            for c in range(c2, c1, -1): ring.append(grid[r2][c])
            for r in range(r2, r1, -1): ring.append(grid[r][c1])
            length = len(ring)
            shift = k % length
            idx = shift
            for c in range(c1, c2): grid[r1][c] = ring[idx % length]; idx += 1
            for r in range(r1, r2): grid[r][c2] = ring[idx % length]; idx += 1
            for c in range(c2, c1, -1): grid[r2][c] = ring[idx % length]; idx += 1
            for r in range(r2, r1, -1): grid[r][c1] = ring[idx % length]; idx += 1
        return grid
