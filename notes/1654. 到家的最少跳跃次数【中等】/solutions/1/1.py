class Solution:
    def minimumJumps(self, forbidden: list[int], a: int, b: int, x: int) -> int:
        from collections import deque
        limit = 6000
        ban = set(forbidden)
        visited = [[False, False] for _ in range(limit + 1)]
        queue = deque([(0, 0, 0)])  # (pos, steps, lastBack)
        visited[0][0] = True
        while queue:
            pos, steps, last_back = queue.popleft()
            if pos == x:
                return steps
            fwd = pos + a
            if fwd <= limit and fwd not in ban and not visited[fwd][0]:
                visited[fwd][0] = True
                queue.append((fwd, steps + 1, 0))
            if not last_back:
                bwd = pos - b
                if bwd >= 0 and bwd not in ban and not visited[bwd][1]:
                    visited[bwd][1] = True
                    queue.append((bwd, steps + 1, 1))
        return -1
