class Solution:
    def regionsBySlashes(self, grid: list[str]) -> int:
        n = len(grid)
        parent = list(range(n * n * 4))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            parent[find(x)] = find(y)

        for i in range(n):
            for j in range(n):
                base = (i * n + j) * 4
                ch = grid[i][j]

                if ch == '/':
                    union(base + 0, base + 3)
                    union(base + 1, base + 2)
                elif ch == '\\':
                    union(base + 0, base + 1)
                    union(base + 2, base + 3)
                else:
                    union(base + 0, base + 1)
                    union(base + 1, base + 2)
                    union(base + 2, base + 3)

                if i > 0:
                    union(base + 0, ((i - 1) * n + j) * 4 + 2)
                if j > 0:
                    union(base + 3, (i * n + j - 1) * 4 + 1)

        return sum(1 for i in range(n * n * 4) if find(i) == i)
