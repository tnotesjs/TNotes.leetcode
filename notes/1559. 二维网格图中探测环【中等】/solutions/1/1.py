class Solution:
    def containsCycle(self, grid: list[list[str]]) -> bool:
        m, n = len(grid), len(grid[0])
        parent = list(range(m * n))
        rank = [0] * (m * n)

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a: int, b: int) -> bool:
            ra, rb = find(a), find(b)
            if ra == rb:
                return True
            if rank[ra] < rank[rb]:
                parent[ra] = rb
            elif rank[ra] > rank[rb]:
                parent[rb] = ra
            else:
                parent[rb] = ra
                rank[ra] += 1
            return False

        for i in range(m):
            for j in range(n):
                if j + 1 < n and grid[i][j] == grid[i][j + 1]:
                    if union(i * n + j, i * n + j + 1):
                        return True
                if i + 1 < m and grid[i][j] == grid[i + 1][j]:
                    if union(i * n + j, (i + 1) * n + j):
                        return True
        return False
