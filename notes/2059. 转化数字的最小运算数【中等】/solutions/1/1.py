class Solution:
    def minimumOperations(self, nums: list[int], start: int, goal: int) -> int:
        from collections import deque
        visited = [False] * 1001
        visited[start] = True
        q = deque([start])
        steps = 0
        while q:
            steps += 1
            for _ in range(len(q)):
                x = q.popleft()
                for num in nums:
                    for nxt in (x + num, x - num, x ^ num):
                        if nxt == goal:
                            return steps
                        if 0 <= nxt <= 1000 and not visited[nxt]:
                            visited[nxt] = True
                            q.append(nxt)
        return -1
