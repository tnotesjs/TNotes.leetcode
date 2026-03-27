class Solution:
    def minimumOperationsToWriteY(self, grid: list[list[int]]) -> int:
        n = len(grid)
        mid = n // 2
        y_count = [0, 0, 0]
        n_count = [0, 0, 0]
        for i in range(n):
            for j in range(n):
                v = grid[i][j]
                is_y = (i <= mid and (j == i or j == n - 1 - i)) or (i >= mid and j == mid)
                if is_y:
                    y_count[v] += 1
                else:
                    n_count[v] += 1
        y_total = sum(y_count)
        n_total = sum(n_count)
        min_ops = float('inf')
        for a in range(3):
            for b in range(3):
                if a == b:
                    continue
                ops = (y_total - y_count[a]) + (n_total - n_count[b])
                min_ops = min(min_ops, ops)
        return min_ops
