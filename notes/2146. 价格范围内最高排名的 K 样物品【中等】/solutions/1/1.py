class Solution:
    def highestRankedKItems(self, grid: List[List[int]], pricing: List[int], start: List[int], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        low, high = pricing
        sr, sc = start
        visited = [[False] * n for _ in range(m)]
        visited[sr][sc] = True
        queue = deque([(sr, sc, 0)])
        items = []  # (dist, price, row, col)
        while queue:
            r, c, d = queue.popleft()
            price = grid[r][c]
            if low <= price <= high:
                items.append((d, price, r, c))
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc] and grid[nr][nc] != 0:
                    visited[nr][nc] = True
                    queue.append((nr, nc, d + 1))
        items.sort()
        return [[r, c] for _, _, r, c in items[:k]]
