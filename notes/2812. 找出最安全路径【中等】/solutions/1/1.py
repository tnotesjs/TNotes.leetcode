class Solution:
    def maximumSafenessFactor(self, grid: list[list[int]]) -> int:
        from collections import deque
        n = len(grid)
        dist = [[-1] * n for _ in range(n)]
        q = deque()
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    dist[i][j] = 0
                    q.append((i, j))
        dirs = [(0,1),(0,-1),(1,0),(-1,0)]
        while q:
            r, c = q.popleft()
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and dist[nr][nc] == -1:
                    dist[nr][nc] = dist[r][c] + 1
                    q.append((nr, nc))

        def check(k):
            if dist[0][0] < k or dist[n-1][n-1] < k:
                return False
            visited = [[False] * n for _ in range(n)]
            visited[0][0] = True
            q = deque([(0, 0)])
            while q:
                r, c = q.popleft()
                if r == n-1 and c == n-1:
                    return True
                for dr, dc in dirs:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n and not visited[nr][nc] and dist[nr][nc] >= k:
                        visited[nr][nc] = True
                        q.append((nr, nc))
            return False

        lo, hi = 0, n * 2
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if check(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
