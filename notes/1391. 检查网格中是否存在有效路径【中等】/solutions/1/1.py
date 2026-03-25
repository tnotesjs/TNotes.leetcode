class Solution:
    def hasValidPath(self, grid: list[list[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        # 每种街道连接的方向：左0 右1 上2 下3
        conns = {1: (0, 1), 2: (2, 3), 3: (0, 3), 4: (1, 3), 5: (0, 2), 6: (1, 2)}
        dr = [0, 0, -1, 1]
        dc = [-1, 1, 0, 0]
        opp = [1, 0, 3, 2]

        from collections import deque
        visited = [[False] * n for _ in range(m)]
        queue = deque([(0, 0)])
        visited[0][0] = True

        while queue:
            r, c = queue.popleft()
            if r == m - 1 and c == n - 1:
                return True
            for d in conns[grid[r][c]]:
                nr, nc = r + dr[d], c + dc[d]
                if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                    need = opp[d]
                    if need in conns[grid[nr][nc]]:
                        visited[nr][nc] = True
                        queue.append((nr, nc))
        return False
