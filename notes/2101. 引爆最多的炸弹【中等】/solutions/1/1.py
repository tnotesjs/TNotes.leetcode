class Solution:
    def maximumDetonation(self, bombs: list[list[int]]) -> int:
        from collections import deque
        n = len(bombs)
        adj = [[] for _ in range(n)]
        for i in range(n):
            for j in range(n):
                if i == j:
                    continue
                dx = bombs[i][0] - bombs[j][0]
                dy = bombs[i][1] - bombs[j][1]
                r = bombs[i][2]
                if dx * dx + dy * dy <= r * r:
                    adj[i].append(j)
        ans = 0
        for i in range(n):
            visited = [False] * n
            visited[i] = True
            q = deque([i])
            cnt = 1
            while q:
                cur = q.popleft()
                for nxt in adj[cur]:
                    if not visited[nxt]:
                        visited[nxt] = True
                        cnt += 1
                        q.append(nxt)
            ans = max(ans, cnt)
        return ans
